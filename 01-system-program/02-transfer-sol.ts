import * as Web3 from '@solana/web3.js';
import base58 from 'bs58';

async function main(){
    const decoded = base58.decode('SWNPwtnQy9btLYm2z4xxzA9kRHc96K8BJmXVuJsHSaGH98e85CaGNFKzqq91avki65wWnZAgvo7RQFcd8gQMmj2');
    const keyPair = Web3.Keypair.fromSecretKey(decoded);

    const publicKeyFrom = new Web3.PublicKey('G8far1nENNm6Gma9B6kYsnco1ps4FrupncrYnUJS3k84');
    const publicKeyTo = new Web3.PublicKey('DPTmfmFH6nnzsae5Ny964rNDAyTsTty4URKzFhJRnoWB');

    const instruction = Web3.SystemProgram.transfer({
        fromPubkey: publicKeyFrom,
        toPubkey: publicKeyTo,
        lamports: 1,
    });
    const transaction = new Web3.Transaction();
    transaction.add(instruction);

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'));
    const txSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [keyPair]);

    console.log('txHash', txSignature);
}

main();