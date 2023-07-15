import { get } from 'https://bukulapak.github.io/api/process.js';
import { isiDataOrangTua } from './controller/edit_orangtua.js';
import { urlFetch } from './config/url_get-orangtua.js';

get(urlFetch, isiDataOrangTua);
