var MongoClient=require('mongodb').MongoClient;
exports.createConnection=function(){
  MongoClient.connect("mongodb://demo:demo@ds247047.mlab.com:47047/pro24").then(function(client){
    console.log("connect to mongodb");
    exports.database=client.db("pro24");
  });
}
