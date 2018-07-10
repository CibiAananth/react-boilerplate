import axios from 'axios';

import { authInstance } from '../axios/axiosGlobals';

export function userLogin(params) {
	return authInstance
		.post(`/login`, params)
		.then((response) => ({ params, response }))
		.catch((error) => ({ params, error }));
}
