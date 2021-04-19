process.env.NTBA_FIX_319 = 1;
require ('dotenv').config()

const telegram = require('node-telegram-bot-api')

const bot = new telegram (process.env.TELEGRAM_TOKEN)


const getRandomJoke = async () =>{
    var data = require('./jokes.json')
    var obj = JSON.parse(JSON.stringify(data))
    var randomNumber = Math.floor(Math.random() * 68)
    return `${obj.jokes[randomNumber].question}
    ${obj.jokes[randomNumber].answer}`;

}

const main = async () => {
    const randomJoke = await getRandomJoke();
    bot.sendMessage(process.env.TELEGRAM_CHAT_ID, randomJoke);
    console.log(randomJoke);
  }

main();
