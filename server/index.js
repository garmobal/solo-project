const db = require('./db');
const { app } = require('./app');

const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT || 3002;

(async () => {
  try {
    await db.conn;
    app.listen(port, () => console.log(`http://${hostname}:${port}`));
  } catch (e) {
    console.log(e);
  }
})();
