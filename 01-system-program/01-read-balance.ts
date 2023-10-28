import * as Web3 from '@solana/web3.js';

async function main() {
    const publicKey = new Web3.PublicKey('G8far1nENNm6Gma9B6kYsnco1ps4FrupncrYnUJS3k84');
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'));
    const balance = await connection.getBalance(publicKey);
    console.log('balance', balance / 1000000000);
}

main()