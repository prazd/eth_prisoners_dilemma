if (typeof web3 !== 'undefined')
    web3 = new Web3(web3.currentProvider);
else
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));


const instance = new web3.eth.Contract(CONTRACT_ABI,CONTRACT_ADDRESS);
// console.log(instance)
document.getElementById('addr').innerText = CONTRACT_ADDRESS;
