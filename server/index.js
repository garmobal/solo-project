const db = require('./db');
const { app } = require('./app');

const PORT = process.env.PORT;
(async () => {
  try {
    await db.conn;
    app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
  } catch (e) {
    console.log(e);
  }
})();

// app.listen(PORT, () => console.log('running @ http://localhost:3002 '));
