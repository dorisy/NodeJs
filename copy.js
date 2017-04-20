 var fs = require('fs')
// function copy(src,dst){
// 	fs.createReadStream(src).pipe(fs.creareWriteStream(dst))
// }
// function main(argv){
// 	copy(argv[0],argv[1])
// }
// main(process.argv.slice(2))
var reader = fs.createReadStream('in.txt',{highWaterMark:11})//设置每次读取11个buffer
var writer = fs.createWriteStream('out.txt')
var data = ''
reader.setEncoding('utf-8')
reader.on('data',function(chunk){
	data += chunk
	writer.write(chunk)
	console.log(chunk)
})
reader.on('end',function(){
	console.log(data)
	writer.end()
})
 //or
//reader.pipe(writer)