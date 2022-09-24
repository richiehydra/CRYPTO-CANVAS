//SPDX-License-Identifier: Unlicense
pragma solidity >= 0.5.0 <0.9.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";



contract NFTMarketPlace is ERC721URIStorage {
    
    address payable owner;
     
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;
    uint256 listprice = 0.01 ether;

    struct ListedToken {
        uint tokenId;
        address payable owner;
        address payable seller;
        uint256 price;
        bool currentlyListed;
    }
    mapping(uint256=>ListedToken)private idToListedToken;


    constructor()ERC721("NFTMarketPlace","NFTM")
    {
        owner=payable(msg.sender);
    }

    function updateListPrice(uint _listprice)public 
    {
        require(msg.sender==owner,"Only Owner can Call These Function To Update ListPrice");
        listprice=_listprice;
    }

    function getListPrice() public view  returns(uint256)
    {
        return listprice;
    }

    function getLatestIdToListedToken()public view returns(ListedToken memory)
    {
        uint256 currenttokenid=_tokenIds.current();
       return  idToListedToken[currenttokenid];
    }

    function  getListedTokenForId(uint _tokenid)public view returns(ListedToken memory)
    {
        return idToListedToken[_tokenid];
    }

    function getCurrentToken()public view returns(uint256)
    {
        return _tokenIds.current();
    }

    function createToken(string memory tokenURI,uint256 price )public payable  returns(uint)
    {
        require(msg.value==listprice,"Check The Amount of ether passed");
        require(price>0,"Price Cant Be Negative");
        _tokenIds.increment();
        uint256 newtoken=_tokenIds.current();
        _safeMint(msg.sender,newtoken);
        _setTokenURI(newtoken,tokenURI);
        createListedToken(newtoken,price);
        return newtoken;
    }

    function createListedToken(uint256 _tokenid,uint256 _price)private
    {
        idToListedToken[_tokenid]=ListedToken(_tokenid,payable(address(this)),payable(msg.sender),_price,true);
        _transfer(msg.sender,address(this),_tokenid);
    }


        function getAllNFTs() public view returns (ListedToken[] memory) {
        uint nftCount = _tokenIds.current();
        ListedToken[] memory tokens = new ListedToken[](nftCount);
        uint currentIndex = 0;
        uint currentId;
       
        for(uint i=0;i<nftCount;i++)
        {
            currentId = i + 1;
            ListedToken storage currentItem = idToListedToken[currentId];
            tokens[currentIndex] = currentItem;
            currentIndex += 1;
        }

        return tokens;
    }
    
  
    function getMyNFTs() public view returns (ListedToken[] memory) {
        uint totalItemCount = _tokenIds.current();
        uint itemCount = 0;
        uint currentIndex = 0;
        uint currentId;
       
        for(uint i=0; i < totalItemCount; i++)
        {
            if(idToListedToken[i+1].owner == msg.sender || idToListedToken[i+1].seller == msg.sender){
                itemCount += 1;
            }
        }

        ListedToken[] memory items = new ListedToken[](itemCount);
        for(uint i=0; i < totalItemCount; i++) {
            if(idToListedToken[i+1].owner == msg.sender || idToListedToken[i+1].seller == msg.sender) {
                currentId = i+1;
                ListedToken storage currentItem = idToListedToken[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    function executeSale(uint256 tokenid)public payable 
    {
        uint256 price=idToListedToken[tokenid].price;
        require(msg.value==price,"Not Enough Amount Got");
        address seller=idToListedToken[tokenid].seller;
        idToListedToken[tokenid].currentlyListed=true;
        idToListedToken[tokenid].seller=payable(msg.sender);
        _itemsSold.increment();
        _transfer(address(this),msg.sender,tokenid);
        approve(address(this),tokenid);
        payable(owner).transfer(listprice);
        payable(seller).transfer(msg.value);
    }

}
