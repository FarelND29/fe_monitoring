const urlParams = new URLSearchParams(window.location.search);
const mahasiswaId = urlParams.get('mahasiswaId');

export let urlPUT = 'https://farel-app.herokuapp.com/upd/mahasiswa/' + mahasiswaId;

export function AmbilResponse(result) {
  console.log(result); // menampilkan response API pada console
  alert(result.message);
  window.location.href = 'tables_mahasiswa.html';
}
