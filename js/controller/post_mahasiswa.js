import { postData } from 'https://bukulapak.github.io/api/process.js';
import { onClick, getValue } from 'https://bukulapak.github.io/element/process.js';
import { urlPOST, AmbilResponse } from '../config/url_post-mahasiswa.js';

function pushDataMahasiwa() {
  let data = {
    nama: getValue('nama'),
    npm: parseInt(getValue('npm')),
    jekel: getValue('jekel'),
    phone_number: getValue('phone_number_mhs'),
  };
  postData(urlPOST, data, AmbilResponse);
}

onClick('button', pushDataMahasiwa);
