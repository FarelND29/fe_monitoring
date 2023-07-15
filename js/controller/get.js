import { addInner } from 'https://bukulapak.github.io/element/process.js';
import { getRandomColor, getRandomColorName } from 'https://bukulapak.github.io/image/process.js';
import { isiTabel, isiTableMhs, isiTabelOrtu, isiTabelDosen } from '../temp/table.js';
export function isiTableMonitoring(results) {
  results.forEach(isiRow);
}
function isiRow(value) {
  let content = isiTabel
    .replace('#NAMAORTU#', value.ortu.nama_ot ? value.ortu.nama_ot : '#NAMAORTU#')
    .replace('#NOHPORTU#', value.ortu ? value.ortu.phone_number : '#NOHPORTU#')
    .replace('#NAMAANAK#', value.ortu.anak ? value.ortu.anak.nama : '#NAMAANAK#')
    .replace('#NPM#', value.ortu.anak ? value.ortu.anak.npm : '#NPM#')
    .replace('#JEKEL#', value.ortu.anak ? value.ortu.anak.jekel : '#JEKEL#')
    .replace('#NOHPANAK#', value.ortu.anak ? value.ortu.anak.phone_number : '#NOHPANAK#')
    .replace('#TEMA#', value.tema ? value.tema.nama_tema : '#TEMA#')
    .replace('#NAMADOSEN#', value.dosen ? value.dosen.nama_dosen : '#NAMADOSEN#')
    .replace('#ALAMAT#', value.dosen ? value.dosen.alamat : '#ALAMAT#')
    .replace('#NOHPDOSEN#', value.dosen ? value.dosen.phone_number : '#NOHPDOSEN#')
    .replace('#EMAIL#', value.dosen ? value.dosen.email : '#EMAIL#')
    .replace('#TANGGAL#', value.tanggal)
    .replace('#HARI#', value.hari)
    .replace("#IDETAILED#", value._id)
    .replace("#IDEDIT#", value._id)
    .replace("#IDHAPUS#", value._id)
    .replace('#WARNA#', getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner('TabelMonitoring', content);
}

export function isiTableMahasiswa(results) {
  results.forEach(isiRow2);
}
function isiRow2(value) {
  let content = isiTableMhs
    .replace('#NAMAANAK#', value.nama ? value.nama : '#NAMAANAK#')
    .replace('#NPM#', value.npm ? value.npm : '#NPM#')
    .replace('#JEKEL#', value.jekel ? value.jekel : '#JEKEL#')
    .replace('#NOHPANAK#', value.phone_number ? value.phone_number : '#NOHPANAK#')
    .replace("#IDEDIT#", value._id)
    .replace("#IDHAPUS#", value._id)
    .replace('#WARNA#', getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner('TabelMahasiswa', content);
}

export function isiTableOrangTua(results) {
  results.forEach(isiRow3);
3}
function isiRow3(value) {
  let content = isiTabelOrtu
    .replace('#NAMAORTU#', value.nama_ot ? value.nama_ot : '#NAMAORTU#')
    .replace('#NOHPORTU#', value.phone_number ? value.phone_number : '#NOHPORTU#')
    .replace('#NAMAANAK#', value.anak ? value.anak.nama : '#NAMAANAK#')
    .replace('#NPM#', value.anak ? value.anak.npm : '#NPM#')
    .replace('#JEKEL#', value.anak ? value.anak.jekel : '#JEKEL#')
    .replace('#NOHPANAK#', value.anak ? value.anak.phone_number : '#NOHPANAK#')
    .replace("#IDEDIT#", value._id)
    .replace("#IDHAPUS#", value._id)
    .replace('#WARNA#', getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner('TabelOrangTua', content);
}

export function isiTableDosenWali(results) {
  results.forEach(isiRow4);
3}
function isiRow4(value) {
  let content = isiTabelDosen
    .replace('#NAMADOSEN#', value.nama_dosen ? value.nama_dosen : '#NAMADOSEN#')
    .replace('#ALAMAT#', value.alamat ? value.alamat : '#ALAMAT#')
    .replace('#NOHPDOSEN#', value.phone_number ? value.phone_number : '#NOHPDOSEN#')
    .replace('#EMAIL#', value.email ? value.email : '#EMAIL#')
    .replace("#IDEDIT#", value._id)
    .replace("#IDHAPUS#", value._id)
    .replace('#WARNA#', getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner('TabelDosenWali', content);
}
