var net = require('net')
// var server = net.createServer()
// server.on('connection',function (socket) {
// 	socket.on('data',function(data){
// 		socket.write('你好')
// 	})
// 	socket.on('end',function(){
// 		console.log('连接断开')
// 	})
// 	socket.write('欢迎学习nodejs')
// })
// server.listen(8124,function(){
// 	console.log('server bound')
// })
//or
var server = net.createServer(function (socket){
	socket.on('data',function(data){
		socket.write('你好')
	})
	socket.on('drain',function(){
		console.log('drain')
	})
	socket.on('end',function(){
		console.log('连接断开')
	})
	socket.write('欢迎学习nodejs')
})
server.listen(8124,function(){
	console.log('server bound')
})