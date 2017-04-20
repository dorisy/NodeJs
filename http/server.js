var http = require('http');
var url = require('url');
var util = require('util');

// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end(util.inspect(url.parse(req.url, true)));//get请求的参数都是放在URL中的,可以直接解析
// }).listen(9900);
var querystring = require('querystring');

http.createServer(function(req, res){
    var post = '';     //定义了一个post变量，用于暂存请求体的信息

    req.on('data', function(chunk){    //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
        post += chunk;
    });

    req.on('end', function(){    //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
        post = querystring.parse(post);
        res.end(util.inspect(post));
    });
}).listen(9800,function(){console.log('服务已启动,监听端口为9800')});