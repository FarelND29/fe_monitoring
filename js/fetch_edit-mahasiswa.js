import { get } from 'https://bukulapak.github.io/api/process.js';
import { isiDataMahasiswa } from './controller/edit_mahasiswa.js';
import { urlFetch } from './config/url_get-mahasiswa.js';

get(urlFetch, isiDataMahasiswa);
