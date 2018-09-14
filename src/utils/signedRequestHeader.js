/* import hmacSHA256 from 'crypto-js/hmac-sha256';
import Base64 from 'crypto-js/enc-base64';

import { APP_ID, API_KEY, JWT_KEY } from '../constants/apiCredentials';
import { validateToken } from './jwtUtils';

export function getSignedHeader(data) {
	const uri = data.url;
	const uriEncoded = encodeURIComponent(uri).toLowerCase();
	const method = data.method.toUpperCase();
	const appid = APP_ID;
	const apikey = API_KEY;
	const timestamp = Math.floor(Date.now() / 1000);
	const nonce = randomString(13);
	const messageRaw = appid + method + uriEncoded + timestamp + nonce;
	const hmacDigest = Base64.stringify(hmacSHA256(messageRaw, apikey));

	console.log(`cryptoJS amx ${appid}:${hmacDigest}:${nonce}:${timestamp}`);
	return `amx ${appid}:${hmacDigest}:${nonce}:${timestamp}`;
}

function randomString(length) {
	var text = '';
	var possible =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (var i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}
*/
