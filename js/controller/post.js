import { postData } from 'https://bukulapak.github.io/api/process.js';
import { onClick, getValue } from 'https://bukulapak.github.io/element/process.js';
import { urlPOST, AmbilResponse } from '../config/url_post.js';

function pushData() {
  let data = {
    orangtua: {
      nama_ot: getValue('nama_ot'),
      phone_number: getValue('phone_number'),
      anak: {
        nama: getValue('nama'),
        npm: parseInt(getValue('NPM')),
        Jekel: getValue('jekel'),
        phone_number: getValue('phone_number'),
      },
    },
    tema: {
      nama_tema: getValue('nama_tema'),
    },
    dosenwali: {
      nama_dosen: getValue('nama_dosen'),
      alamat: getValue('alamat'),
      phone_number: getValue('phone_number'),
      email: getValue('email'),
    },
    tanggal: getValue('tanggal'),
    hari: getValue('hari'),
  };
  postData(urlPOST, data, AmbilResponse);
}

onClick('button', pushData);
