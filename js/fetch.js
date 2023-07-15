import { get } from 'https://bukulapak.github.io/api/process.js';
import { isiTableDosenWali, isiTableMahasiswa, isiTableMonitoring, isiTableOrangTua } from './controller/get.js';
import { urlAPIDosenWali, urlAPIMahasiswa, urlAPIMonitoring, urlAPIOrangTua } from './config/url.js';

get(urlAPIMonitoring, isiTableMonitoring);
get(urlAPIMahasiswa, isiTableMahasiswa);
get(urlAPIOrangTua, isiTableOrangTua);
get(urlAPIDosenWali, isiTableDosenWali);
