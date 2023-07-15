import { get } from 'https://bukulapak.github.io/api/process.js';
import { isiDataDosenWali } from './controller/edit_dosenwali.js';
import { urlFetch } from './config/url_get-dosenwali.js';

get(urlFetch, isiDataDosenWali);
