require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/6uZ34LRra1knIT4qXOG2prt_47EQQmvb",
      accounts: [ "8a4f69299d51bc57c82246e00f914eea83b4719de46c56e3bcbb3aef6d5251f4" ]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

//515e75d8cae47a1eb1ff

//7233b96e059f394a06472fac90b9dc6a85775faefe65d90dd79e50a584ebf0e5






//API Key: 515e75d8cae47a1eb1ff
 //API Secret: 7233b96e059f394a06472fac90b9dc6a85775faefe65d90dd79e50a584ebf0e5
 //JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkYTllYmY5Ny02ODVmLTQ0ZDQtYmNiNS04MzE5ZjQzN2U4NjgiLCJlbWFpbCI6InBvb2phcmlhcHB1MThAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjUxNWU3NWQ4Y2FlNDdhMWViMWZmIiwic2NvcGVkS2V5U2VjcmV0IjoiNzIzM2I5NmUwNTlmMzk0YTA2NDcyZmFjOTBiOWRjNmE4NTc3NWZhZWZlNjVkOTBkZDc5ZTUwYTU4NGViZjBlNSIsImlhdCI6MTY2Mzk5NTI3NH0.0URfuhMMmTt67BBL8WcGqUNDpzL6ff-i3GdQzHBm-0w















//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkYTllYmY5Ny02ODVmLTQ0ZDQtYmNiNS04MzE5ZjQzN2U4NjgiLCJlbWFpbCI6InBvb2phcmlhcHB1MThAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjUxNWU3NWQ4Y2FlNDdhMWViMWZmIiwic2NvcGVkS2V5U2VjcmV0IjoiNzIzM2I5NmUwNTlmMzk0YTA2NDcyZmFjOTBiOWRjNmE4NTc3NWZhZWZlNjVkOTBkZDc5ZTUwYTU4NGViZjBlNSIsImlhdCI6MTY2Mzk5NTI3NH0.0URfuhMMmTt67BBL8WcGqUNDpzL6ff-i3GdQzHBm-0w