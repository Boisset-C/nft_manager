serverUrl = "https://zhisezdhydkc.usemoralis.com:2053/server";
appId = "4sjtOap670Lbm0FTcdJ88Gse8zS0QnjoF0TW1CkS";
Moralis.start({ serverUrl, appId });

//fetching from each NFT the metadata
function fetchNFTMetadata(NFTs) {
  let promises = [];

  for (let i = 0; i < NFTs.length; i++) {
    let nft = NFTs[i];
    let id = nft.token_id;
    // cant make direct call to database, have to make a fetch to a cloud function which fetches the data
    promises.push(
      fetch(
        "https://zhisezdhydkc.usemoralis.com:2053/server/functions/getNFT?_ApplicationId=4sjtOap670Lbm0FTcdJ88Gse8zS0QnjoF0TW1CkS&nftId=" +
          id
      )
        .then((res) => res.json())
        .then((res) => JSON.parse(res.result))
        .then((res) => {
          nft.metadata = res;
        })
        .then(() => {
          return nft;
        })
    );
  }
  return Promise.all(promises);
}

async function initializeApp() {
  let currentUser = Moralis.User.current();

  if (!currentUser) {
    currentUser = await Moralis.Web3.authenticate();
  }

  alert("Cosme you have signed in.");
  const options = {
    address: "0x61F3c00a76463c0a2fe6FEE6703819E7326B67e1",
    chain: "rinkeby",
  };
  let NFTs = await Moralis.Web3API.token.getAllTokenIds(options); //grabbing nfts from contract address in options
  let NFTWithMetadata = await fetchNFTMetadata(NFTs.result);
  console.log(NFTWithMetadata);
}

initializeApp();
