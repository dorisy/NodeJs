var leakArr = [];
var leak = function (){
	leakArr.push("leak"+Math.random())
}
http.createServer(function(req,res){
	leak();
	res.writeHead(200,{'Content-Type':'text/plain'})
	res.end('hello world\n')
}).listen(1337)
console.log('server running at port 1337')