const urlParams = new URLSearchParams(window.location.search);
const dosenwaliId = urlParams.get('dosenwaliId');

export let urlPUT = 'https://farel-app.herokuapp.com/upd/dosenwali/' + dosenwaliId;

export function AmbilResponse(result) {
  console.log(result); // menampilkan response API pada console
  alert(result.message);
  window.location.href = 'tables_dosenwali.html';
}
