import { get } from 'https://bukulapak.github.io/api/process.js';
import { isiDataMonitoring } from './controller/edit_monitoring.js';
import { urlFetch } from './config/url_get-monitoring.js';

get(urlFetch, isiDataMonitoring);
