 /*
 nodemailer@v0.7：  nodemailer.createTransport('SMTP',opts)
 nodemailer@v0.8+： nodemailer.createTransport(opts)
 */
 var nodemailer = require('nodemailer')
 var smtpTransport = nodemailer.createTransport({
 	service:"QQ",
 	host:"smtp.qq.com",
 	port:465,
 	auth:{
 		user:'948270260@qq.com',
 		pass:'leonmarry619.'
 	}
 })
 var mailOptions = {
 	from:'948270260@qq.com',
 	to:'qsyang@ctrip.com',
 	subject:'Good Afternoon',
 	text:'Good Afternoon'
 }
 smtpTransport.sendMail(mailOptions,function (err,response) {
 	if(err){
 		console.log(err)
 	}else{
 		console.log('Message sent:' + response.message)
 	}
 })
