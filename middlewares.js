export const localMiddlewares = (req, res, next) => {
  res.locals.siteName = "No Practice";
  next();
};
