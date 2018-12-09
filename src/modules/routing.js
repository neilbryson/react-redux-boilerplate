const PREFIX = '@route';

export const route = routeName => `${PREFIX}/${routeName}`;

export const navigateTo = (routeName, payload = {}, meta = {}) => ({
  meta,
  payload,
  type: route(routeName),
});
