// services
import { findUser } from '../services/users.service.js';

// constants
import Roles from '../constants/roles.contants.js';

import { OAuth2Client } from 'google-auth-library';
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const googleAuthVerify = async (tokenId) => {
  const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: process.env.GOOGLE_CLIENT_ID,
  });
  const { email, given_name, family_name } = ticket.getPayload();
  const user = await findUser(email);
  const userData = {
    email,
    name: given_name,
    lastName: family_name,
    ...(user ? { role: user.role } : { role: Roles.user }),
  };
  return userData;
};

const validateAtuthentication = (req, resp, next) => {
  const url = req.url;
  if(url === '/' || url === '/api') {
    next();
  } else {
    googleAuthVerify(req.headers.authorization)
    .then(userData => {
      resp.locals.userData = userData;
      next();
    })
    .catch(error => {
      resp.status(401).json({ error: 'Usuario no autenticado' })
    })
  }
};

export default validateAtuthentication;