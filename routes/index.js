const express = require('express')
const router = express.Router()

// Messages array
const messages = [
  { text: "Hi there!", user: "Amando", added: new Date() },
  { text: "Hello World!", user: "Charles", added: new Date() },
];

//Index Route
router.get('/', (req, res) => {
    res.render('index', {title: 'Mini message board', messages})
})

// New message form route
router.get('/new', (req, res) => {
  res.render('form', { title: 'New Message' });
});

router.get('/message/:id', (req, res) => {
  const message = messages[req.params.id];
  if (message) {
    res.render('message', { title: 'Message Details', message });
  } else {
    res.status(404).send('Message not found');
  }
});

// Handle new message POST
router.post('/new', (req, res) => {
  const { messageUser, messageText } = req.body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect('/');
});


module.exports = router;