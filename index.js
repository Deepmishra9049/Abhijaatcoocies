const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res) => {
  res.cookie("user_session", "active-user", { httpOnly: true });
  res.send("Convo Server (Cookies Active)");
});

app.post('/message', (req, res) => {
  const msg = req.body.message;
  res.json({ reply: "Server received: " + msg });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Convo Server Running on " + port));
