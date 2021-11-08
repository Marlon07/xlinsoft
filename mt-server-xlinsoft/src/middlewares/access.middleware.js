// constants
import { ROLES_ROUTES_MAPPING, ROUTES_REGEX } from '../constants/routes-roles.contants.js'

const validateAccess = (req, resp, next) => {
  let url = req.url;
  if (url === '/' || url === '/api') {
    next();
  } else {
    url = url.split('/api')[1];
    const { role } = resp.locals.userData;
    const route = ROUTES_REGEX.find(regex => regex.test(url)) ?? url;
    const routesRoles = ROLES_ROUTES_MAPPING[route];
    const hasAccess = routesRoles && routesRoles.includes(role);
    if (hasAccess) {
      next();
    } else {
      resp.status(403).json({ error: 'No puedes acceder a este recurso'});
    }
  }
};

export default validateAccess;