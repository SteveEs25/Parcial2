const TelegramBot = require('node-telegram-bot-api');
 
const token = '566278559:AAFve_irdPB1AubdCcIAUrc18madzrdIt5U';
var idChar = 483466868;

var serialport = require("serialport");
var miserial = new serialport("COM3", {
  baudRate: 9600,
  autoOpen: true
});
 
const bot = new TelegramBot(token, {
  polling: true
});

 
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log("El id es: " + chatId);
  var respuesta = msg.text;

  if(respuesta == "encender") 
  {
    console.log("encender alarma");
    bot.sendMessage(chatId, 'Encendiendo Alarma');
    miserial.write("H");
  }
  else if(respuesta == "apagar") 
  {
    console.log("apagar alarma");
    bot.sendMessage(chatId, 'Apagando Alarma');
    miserial.write("L");
  }

});

miserial.setEncoding('utf8');

miserial.on('data', function(data) {
  console.log('Data: ', data);

  if(data[0] == 'H')
  {
    console.log("Boton Presionado");
    bot.sendMessage(idChar, "Presionado el boton");
  }

});