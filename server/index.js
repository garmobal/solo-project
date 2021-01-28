const db = require('./db');
const { app } = require('./app');
const config = require('./config');

(async () => {
  try {
    await db.conn;
    app.listen(config.port, () =>
      console.log(`http://${config.host}:${config.port}`)
    );
  } catch (e) {
    console.log(e);
  }
})();
