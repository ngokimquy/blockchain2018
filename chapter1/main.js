"use strict";


exports.__esModule = true;


var bodyParser = require("body-parser");
var express = require("express");


var blockchain_1 = require("./blockchain");
var p2p_1 = require("./p2p");                                                    
var httpPort = parseInt(process.env.HTTP_PORT) || 3001;
var p2pPort = parseInt(process.env.P2P_PORT) || 6001;

var initHttpServer = function (myHttpPort) {

    var app = express();
    app.use(bodyParser.json());


    app.get("/hello",function(req,res){

res.send("htllo");

    })
    app.get('/blocks', function (req, res) {
        res.send(blockchain_1.getBlockchain());
    });
    app.get('/mineBlock', function (req, res) {






        var newBlock = blockchain_1.generateNextBlock("data");
    //    res.send(newBlock);
      //  console.log("ok");



    });
    app.get('/peers', function (req, res) {
        res.send(p2p_1.getSockets().map(function (s) { return s._socket.remoteAddress + ':' + s._socket.remotePort; }));
    });
    app.post('/addPeer', function (req, res) {
        p2p_1.connectToPeers(req.body.peer);
        res.send();
    });
    app.listen(myHttpPort, function () {
        console.log('Listening http on port: ' + myHttpPort);
    });
};
initHttpServer(httpPort);
p2p_1.initP2PServer(p2pPort);
