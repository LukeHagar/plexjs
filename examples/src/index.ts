// eslint-disable-next-line no-console
import { Configuration, ServerApi } from '@lukehagar/plexjs';

const config = new Configuration({ basePath: 'http://10.10.10.47:32400' });
const api = new ServerApi(config);

api.getServerCapabilities();

console.log('Hello world!');
