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
    address: "0x61F3c00a76463c0a2fe6FEE6703819E7326B67e1",
    chain: "rinkeby",
  };
  let NFTs = await Moralis.Web3API.token.getAllTokenIds(options);
  console.log(NFTs);
}

initializeApp();
