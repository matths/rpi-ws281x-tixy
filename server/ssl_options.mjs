import fs from 'fs';

const key = fs.readFileSync(new URL('./ssl/private/server.key', import.meta.url));
const cert = fs.readFileSync(new URL('./ssl/certs/server.crt', import.meta.url));

export default {
	key: key,
	cert: cert,
	requestCert: false,
	rejectUnauthorized: false
};
