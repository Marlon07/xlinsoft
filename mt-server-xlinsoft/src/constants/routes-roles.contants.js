import Roles from './roles.contants.js';

const PRODUCTS_UPDATE_REGEX = /\/products\/update\/[a-z0-9]/;
const PRODUCTS_REMOVE_REGEX = /\/products\/remove\/[a-z0-9]/;
const USER_FIND_BY_ID_REGEX = /\/users\/[a-z0-9]/;

const ROLES_ROUTES_MAPPING = {
  '/users/signin': [Roles.user, Roles.admin],
  '/products': [Roles.admin],
  '/products/add': [Roles.admin],
  [PRODUCTS_UPDATE_REGEX]: [Roles.admin],
  [PRODUCTS_REMOVE_REGEX]: [Roles.admin],
  [USER_FIND_BY_ID_REGEX]: [Roles.admin],
  '/users': [Roles.admin],
};

const ROUTES_REGEX = [
  PRODUCTS_UPDATE_REGEX,
  PRODUCTS_REMOVE_REGEX,
  USER_FIND_BY_ID_REGEX,
];

export { ROLES_ROUTES_MAPPING, ROUTES_REGEX }; 