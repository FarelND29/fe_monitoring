export let urlPOST = 'https://farel-app.herokuapp.com/ins/dosenwali';

export function AmbilResponse(result) {
  console.log(result); //menampilkan response API pada console
  alert(result.message); //menampilkan response API pada alert
  window.location.reload(); //reload halaman setelah klik ok pada alert
}
