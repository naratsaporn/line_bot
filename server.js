var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')
var app = express()
var wordcut = require("wordcut");

app.use(bodyParser.json())

app.set('port', (process.env.PORT || 4000))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
wordcut.init();

app.post('/webhook', (req, res) => {
  var text = req.body.events[0].message.text
  var sender = req.body.events[0].source.userId
  var replyToken = req.body.events[0].replyToken
  // console.log(text, sender, replyToken)
  // console.log(typeof sender, typeof text)
  // console.log(req.body.events[0])

  if (text === 'สวัสดี') {
    sendText(sender, text)
    
  }else{
    // text  = "กำลังพัฒนา LINE BOT BY MEN";
    var text_gruop = wordcut.cut(text);
    var arr = text_gruop.split("|")
    for(var i=0;i<arr.length;i++) {
       sendText(sender,arr[i]  )
    }
  }
  res.sendStatus(200)
})

function sendText (sender, text) {
  let data = {
    to: sender,
    messages: [
      {
        type: 'text',
        text: text+'💞'
      }
    ]
  }
  request.post({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer {XXXXX}'
    },
    url: 'https://api.line.me/v2/bot/message/push',
    method: 'POST',
    body: data,
    json: true
  }, function (err, res, body) {
    if (err) console.log('error')
    if (res) console.log('success')
    if (body) console.log(body)
  })
}

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})
