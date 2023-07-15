import { postData } from 'https://bukulapak.github.io/api/process.js';
import { onClick, getValue } from 'https://bukulapak.github.io/element/process.js';
import { urlPOST, AmbilResponse } from '../config/url_post-orangtua.js';

function pushDataOrangTua() {
  let data = {
      nama_ot: getValue('nama_ot'),
      phone_number: getValue('phone_number_ot'),
      anak: {
        nama: getValue('namamhs'),
        npm: parseInt(getValue('npm')),
        jekel: getValue('jekel'),
        phone_number: getValue('phone_number_mhs'),
      },
  };
  postData(urlPOST, data, AmbilResponse);
}

onClick('button', pushDataOrangTua);
