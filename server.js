var express = require('express');
var app = express();
var port = Number(process.env.PORT || 8080);
var server = app.listen(port);
var io = require('socket.io').listen(server);

app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
});

io.sockets.on('connection',function(socket){ //Kullanıcı eğer bu sayfaya bağlanırsa çalışacak ana fonksiyonum
	socket.on('yorumgonder',function(data){ // socket.emit('yorumgonder',yorum) ile gönderdiğim değeri burada aldım.
		io.emit('yorumugerigonder',data); //Bu fonksiyon ise gelen yorumu alıp bütün kullanıcılara servis eder.Bu değeri js dosyamda socket on ile alıp ekrana yazdırabilirim.
	});
});