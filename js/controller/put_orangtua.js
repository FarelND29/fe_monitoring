import { putData } from 'https://bukulapak.github.io/api/process.js';
import { onClick, getValue } from 'https://bukulapak.github.io/element/process.js';
import { urlPUT, AmbilResponse } from '../config/url_put-orangtua.js';

function pushData() {
  let data = {
      nama_ot: getValue('nama_ot'),
      phone_number: getValue('phone_number_ot'),
      anak: {
        nama: getValue('nama'),
        npm: parseInt(getValue('npm')),
        jekel: getValue('jekel'),
        phone_number: getValue('phone_number_mhs'),
      }
      };
  putData(urlPUT, data, AmbilResponse);
}

onClick('button', pushData)