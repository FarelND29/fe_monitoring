import { addInner } from 'https://bukulapak.github.io/element/process.js';
import { getRandomColor, getRandomColorName } from 'https://bukulapak.github.io/image/process.js';
import { isiTabel } from '../temp/table.js';
export function isiTableMonitoring(results) {
  results.forEach(isiRow);
}
function isiRow(value) {
  let content = isiTabel
    .replace('#NAMAORTU#', value.ortu.nama_ot)
    .replace('#NOHPORTU#', value.ortu.phone_number)
    .replace('#NAMAANAK#', value.ortu.anak.nama)
    .replace('#NPM#', value.ortu.anak.npm)
    .replace('#NOHPANAK#', value.ortu.anak.phone_number)
    .replace('#TEMA#', value.tema.nama_tema)
    .replace('#NAMADOSEN#', value.dosen.namadosen)
    .replace('#EMAIL#', value.dosen.email) 
    .replace('#TANGGAL#', value.tanggal)
    .replace('#HARI#', value.hari)
    .replace('#WARNA#', getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner('iniTabel', content);
}
