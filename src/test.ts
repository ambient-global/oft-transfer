import { Keypair } from "@solana/web3.js";
import { base58 } from "ethers/lib/utils";
import { readFileSync } from "fs";

const key = readFileSync('privatekey.txt', 'utf8');
export const payer = Keypair.fromSecretKey(base58.decode(key));

console.log('payer: ', payer.publicKey.toBase58())