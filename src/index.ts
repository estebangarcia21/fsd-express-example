import express, { json } from 'express';

function main() {
  const app = express();
  app.use(json());

  app.get('/users', (req, res) => {
    const ageParam = req.query['age'];

    res.send({
      message: 'You got a user with the age of ' + ageParam
    });
  });

  app.post('/users', (req, res) => {
    const body = req.body;

    res.send({ firstName: body['firstName'] });
  });

  app.get('/users/:id/friends', (req, res) => {
    res.send({ friends: [], userId: req.params['id'] });
  })

  app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
  });
}

main();
