import createHttpError from 'http-errors';
import { Session } from '../models/session.js';
import { User } from '../models/user.js';

///check that only authenticate users can CRUD notes
export const authenticate = async (req, res, next) => {
  ///check access token
  if (!req.cookies.accessToken) {
    return next(createHttpError(401, 'Missing access token'));
  }
  ///find session by access token
  const session = await Session.findOne({
    accessToken: req.cookies.accessToken,
  });

  if (!session) {
    return next(createHttpError(401, 'Session not found'));
  }
  ///check is access token not expired
  const isAccessTokenExpired =
    Date.now() > session.accessTokenValidUntil.getTime();

  if (isAccessTokenExpired) {
    return next(createHttpError(401, 'Access token expired'));
  }

  ///find user by session
  const user = await User.findById(session.userId);

  if (!user) {
    return next(createHttpError(401));
  }
  ///if user add it to request
  req.user = user;
  next();
};
