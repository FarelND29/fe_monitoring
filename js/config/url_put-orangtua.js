const urlParams = new URLSearchParams(window.location.search);
const orangtuaId = urlParams.get('orangtuaId');

export let urlPUT = 'https://farel-app.herokuapp.com/upd/orangtua/' + orangtuaId;

export function AmbilResponse(result) {
  console.log(result); // menampilkan response API pada console
  alert(result.message);
  window.location.href = 'tables_orangtua.html';
}
