import { get } from 'https://bukulapak.github.io/api/process.js';
import { isiTableMonitoring } from './controller/get.js';
import { urlAPI } from './config/url.js';
get(urlAPI, isiTableMonitoring);
