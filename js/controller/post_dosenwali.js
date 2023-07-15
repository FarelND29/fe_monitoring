import { postData } from 'https://bukulapak.github.io/api/process.js';
import { onClick, getValue } from 'https://bukulapak.github.io/element/process.js';
import { urlPOST, AmbilResponse } from '../config/url_post-dosenwali.js';

function pushDataDosenWali() {
  let data = {
    nama_dosen: getValue('nama_dosen'),
    alamat: getValue('alamat'),
    phone_number: getValue('phone_number_dosen'),
    email: getValue('email'),
  };
  postData(urlPOST, data, AmbilResponse);
}

onClick('button', pushDataDosenWali);
