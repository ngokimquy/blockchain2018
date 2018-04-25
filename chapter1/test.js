"use strict";
exports.__esModule = true;
var Block = /** @class */ (function () {
    function Block(index, hash, previousHash, timestamp, data) {
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = hash;
    }
    return Block;
}());
var genesisBlock = new Block(0, '816534932c2b7154836da6afc367695e6337db8a921823784c14378abed4f7d7', '', 1465154705, 'my genesis block!!');
var genesisBlock1 = new Block(2, '816534932c2b7154836da6afc367695e6337db8a921823784c14378abed4f7d7', '', 1465154705, 'my genesis block!!');
var genesisBlock2 = new Block(3, '816534932c2b7154836da6afc367695kkkkkkkkkkkkfffe6337db8a921823784c14378abed4f7d7', '', 1465154705, 'my genesis block!!');
var blockchain = [genesisBlock];
for (var i = 1; i < 1000000; i++) {
    blockchain.push(genesisBlock);
    console.log(blockchain[i]);
}
