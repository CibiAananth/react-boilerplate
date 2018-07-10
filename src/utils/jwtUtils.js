import jwt from 'jsonwebtoken';
import { JWT_KEY } from '../constants/apiCredentials';

export function validateToken(token) {
	if (
		token !== null &&
		token !== undefined &&
		token !== '' &&
		token !== ' '
	) {
		return jwt.verify(token, JWT_KEY, function(err, decoded) {
			if (err) {
				console.log('jwt token error', err);
				return false;
			} else return true;
		});
	} else return false;
}
