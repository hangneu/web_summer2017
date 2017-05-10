var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
contents = [
	{title: "title 1", body: "body 1"},
	{title: "title 2", body: "body 2"}
];
app.get("/api/post", listblog);
app.delete("/api/post/:index", deleteblog);
app.post("/api/post", createblog);
function listblog(req, res){
	res.json(contents);
}
function deleteblog(req, res){
	var index = req.params.index;
	contents.splice(index,1);
	res.json(contents);
}
function createblog(req, res){
	var post = req.body;
	contents.push(post);
	res.json(contents);
}
app.listen(3009);