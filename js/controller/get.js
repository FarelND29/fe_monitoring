import { addInner } from 'https://bukulapak.github.io/element/process.js';
import { getRandomColor, getRandomColorName } from 'https://bukulapak.github.io/image/process.js';
import { isiTabel } from '../temp/table.js';
export function isiTableMonitoring(results) {
  results.forEach(isiRow);
}
function isiRow(value) {
  let content = isiTabel
    .replace('#NAMAORTU#', value.ortu.nama_ot?value.ortu.nama_ot:"#NAMAORTU#")
    .replace('#NOHPORTU#', value.ortu?value.ortu.phone_number:"#NOHPORTU#")
    .replace('#NAMAANAK#', value.ortu.anak?value.ortu.anak.nama:"#NAMAANAK#")
    .replace('#NPM#', value.ortu.anak?value.ortu.anak.npm:"#NPM#")
    .replace('#NOHPANAK#', value.ortu.anak?value.ortu.anak.phone_number:"#NOHPANAK#")
    .replace('#TEMA#', value.tema?value.tema.nama_tema:"#TEMA#")
    .replace('#NAMADOSEN#', value.Dosen?value.Dosen.nama_dosen:"#NAMADOSEN#")
    .replace('#EMAIL#', value.Dosen?value.Dosen.email:"#EMAIL#") 
    .replace('#TANGGAL#', value.tanggal)
    .replace('#HARI#', value.hari)
    .replace('#WARNA#', getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner('iniTabel', content);
}
