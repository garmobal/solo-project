const express = require('express');
const testrouter = require('./routes/test.routes');
const studentrouter = require('./routes/student.routes');
const quizzrouter = require('./routes/quizz.routes');
const cors = require('cors');
const answersMiddleware = require('./middleware/test.answers');

const app = express();
app.use(cors());
app.use(express.json());
app.use(answersMiddleware);
app.use('/test', testrouter);
app.use('/student', studentrouter);
app.use('/quiz', quizzrouter);

module.exports = { app };
