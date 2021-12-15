serverUrl = "https://zhisezdhydkc.usemoralis.com:2053/server";
appId = "4sjtOap670Lbm0FTcdJ88Gse8zS0QnjoF0TW1CkS";
Moralis.start({ serverUrl, appId });

async function initializeApp() {
  let currentUser = Moralis.User.current();

  if (!currentUser) {
    currentUser = await Moralis.Web3.authenticate();
  }

  alert("Cosme you have signed in.");
  const options = {
    address: "0x532624731e6B0d19990994Be6422d92E29F2F025",
    chain: "rinkeby",
  };
  const NFTs = await Moralis.Web3API.token.getAllTokenIds(options);
  console.log(NFTs);
}

initializeApp();
