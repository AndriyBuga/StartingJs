// берём Express
var express = require('express');

// создаём Express-приложение
var app = express();

// http://localhost:3000/
app.get('/', function(req, res) {
    res.sendfile('Main.html');
});

// запускаем через порт 3000, не знаю чого
app.listen(3000);
// в консоль
console.log('Сервер стартовал!');