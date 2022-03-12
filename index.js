require('dotenv').config();
require('express-async-errors');
const express = require('express');

const { userRouter, loginRouter, categoryRouter } = require('./routes');
const { errorHandler } = require('./middlewares');

const app = express();

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/login', loginRouter);

app.use('/user', userRouter);

app.use('/categories', categoryRouter);

app.use(errorHandler);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
