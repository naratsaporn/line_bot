# Line_bot
 LINE Bot from the Messaging API call.

# server.js

- app.post('/webhook', (req, res) เป็นการกำหนดเส้นทางหากมีการเรียกใช้ App ผ่าน router ชื่อว่า webhook
https://github.com/naratsaporn/line_bot/blob/59efcea52b6c5dea5c3ad7430ee27239c6d1db36/server.js#L14

- การกำหนดเงื่อนไขว่าหากมีข้อความเข้ามาเป็นคำว่า สวัสดี ให้เรียกใช้งาน function sendText
https://github.com/naratsaporn/line_bot/blob/59efcea52b6c5dea5c3ad7430ee27239c6d1db36/server.js#L22

- function sendText เป็นฟังก์ชันการส่งข้อความกลับไปยังผู้ส่ง
https://github.com/naratsaporn/line_bot/blob/59efcea52b6c5dea5c3ad7430ee27239c6d1db36/server.js#L40

# Ref
 https://medium.com/ingkwan/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-line-bot-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-node-js-aiml-a-beginners-guide-b7708b0b2440
