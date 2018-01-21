var movies=require('./moviedata');
var dbservices=require('../services/dbservices');
exports.getAllMovies=function(req,res){
  var db=dbservices.database;
  var moviesCollection=db.collection("movies");
  moviesCollection.find().toArray().then(function(result){


  var outputJSON={
    "isSuccess":true,
    "data":result
}
  return res.json(outputJSON);
});
};
exports.addNewMovie=function(req,res,next){
  var db=dbservices.database,
  movie=req.body,
  moviesCollection=db.collection("movies");
  moviesCollection.insert(movie).then(function (save_data) {
    return res.json({
"isSuccess":true
});
});
}
