import * as CryptoJS from 'crypto-js';
import * as sizeof from 'object-sizeof';

import {broadcastLatest} from './p2p';

class Block {

    public index: number;
    public hash: string;
    public previousHash: string;
    public timestamp: number;
    public data: string;

    constructor(index: number, hash: string, previousHash: string, timestamp: number, data: string) {
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = hash;
    }
}
// conclution == 25125;
const genesisBlock: Block = new Block(
    0, '816534932c2b7154836da6afc367695e6337db8a921823784c14378abed4f7d7', '', 1465154705, 'my genesis block!!'
);
const genesisBlock1: Block = new Block(
    2, '816534932c2b7154836da6afc367695e6337db8a921823784c14378abed4f7d7', '', 1465154705, 'my genesis block!!'
);
const genesisBlock2: Block = new Block(
    3, '816534932c2b7154836da6afc367695kkkkkkkkkkkkfffe6337db8a921823784c14378abed4f7d7', '', 1465154705, 'my genesis block!!'
);

let blockchain: Block[] = [genesisBlock];

for (var i=1;i<1000000;i++)
{
blockchain.push(genesisBlock);


console.log(blockchain[i]);

 

}

