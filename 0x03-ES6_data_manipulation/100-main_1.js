import { queryAPI, weakMap } from "./100-weak";
const endpoint = { protocol: 'http', name: 'getUsers' };
weakMap.has(endpoint);
queryAPI(endpoint);
weakMap.has(endpoint);
weakMap.get(endpoint);
queryAPI(endpoint);
weakMap.get(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
