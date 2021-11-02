import express from 'express';
const router = express.Router();

import { signInUser, findUserById, findUsers } from '../services/users.service.js';

router.get('/', (req, resp, next) => {
  findUsers()
  .then(users => resp.json(users))
  .catch(next)
});

router.get('/signin', (req, resp, next) => {
  signInUser(resp.locals.userData)
  .then(user => resp.json(user))
  .catch(next)
});

router.get('/:id', (req, resp, next) => {
  findUserById(req.params.id)
  .then(user => resp.json(user))
  .catch(next)
});

export default router;
