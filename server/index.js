const db = require('./db');
const { app } = require('./app');

const PORT = 3002;
(async () => {
  try {
    await db.conn;
    app.listen(PORT, () => console.log('http://localhost:3002'));
  } catch (e) {
    console.log(e);
  }
})();

// app.listen(PORT, () => console.log('running @ http://localhost:3002 '));
