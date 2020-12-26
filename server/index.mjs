import { createServer } from 'https';
import { queue,  } from 'lnsr';
import sirv  from 'sirv';
import sslOptions from './ssl_options.mjs';

const app = queue(
	sirv(new URL('./../build', import.meta.url).pathname)
);

const server = createServer(sslOptions, app);
server.listen(8443, '0.0.0.0');
console.log('server running at https://127.0.0.1:8443/');
