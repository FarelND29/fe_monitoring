import { postData } from 'https://bukulapak.github.io/api/process.js';
import { onClick, getValue } from 'https://bukulapak.github.io/element/process.js';
import { urlPOST, AmbilResponse } from '../config/url_post.js';

function pushData() {
  let data = {
    ortu: {
      nama_ot: getValue('nama_ot'),
      phone_number: getValue('phone_number_ot'),
      anak: {
        nama: getValue('nama'),
        npm: parseInt(getValue('npm')),
        jekel: getValue('jekel'),
        phone_number: getValue('phone_number_mhs'),
      },
    },
    tema: {
      nama_tema: getValue('nama_tema'),
    },
    dosen: {
      nama_dosen: getValue('nama_dosen'),
      alamat: getValue('alamat'),
      phone_number: getValue('phone_number_dosen'),
      email: getValue('email'),
    },
    tanggal: getValue('tanggal'),
    hari: getValue('hari'),
  };
  postData(urlPOST, data, AmbilResponse);
}

onClick('button', pushData);
