import { putData } from 'https://bukulapak.github.io/api/process.js';
import { onClick, getValue } from 'https://bukulapak.github.io/element/process.js';
import { urlPUT, AmbilResponse } from '../config/url_put-mahasiswa.js';

function pushData() {
  let data = {
        nama: getValue('nama'),
        npm: parseInt(getValue('npm')),
        jekel: getValue('jekel'),
        phone_number: getValue('phone_number_mhs'),
  };
  putData(urlPUT, data, AmbilResponse);
}

onClick('button', pushData)