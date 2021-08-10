const db = require('./db');
const express = require('express');
const app = express();

app.use(require('method-override')('_method'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => res.redirect('/mountains'));
app.use('/mountains', require('./routes/mountains'));

const init = async() => {
  await db.syncAndSeed();
  const port = process.env.PORT || 1337;
  app.listen(port, () => console.log(`listening on port ${port}`));
};
 
init();