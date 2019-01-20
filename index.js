'use strict';

const Block = require('./block');
const Blockchain = require('./blockchain');

const blockchain1000 = new Blockchain();

blockchain1000.addBlock(new Block(1, "20/07/2017", { amount: 4 }));

blockchain1000.addBlock(new Block(2, "20/07/2017", { amount: 8 }));

blockchain1000.isChainValid();
