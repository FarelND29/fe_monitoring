import { putData } from 'https://bukulapak.github.io/api/process.js';
import { onClick, getValue } from 'https://bukulapak.github.io/element/process.js';
import { urlPUT, AmbilResponse } from '../config/url_put-dosenwali.js';

function pushData() {
  let data = {
      nama_dosen: getValue('nama_dosen'),
      alamat: getValue('alamat'),
      phone_number: getValue('phone_number_dosen'),
      email: getValue('email'),
  };
  putData(urlPUT, data, AmbilResponse);
}

onClick('button', pushData)