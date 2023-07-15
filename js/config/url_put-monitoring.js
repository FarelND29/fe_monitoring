const urlParams = new URLSearchParams(window.location.search);
const monitoringId = urlParams.get('monitoringId');

export let urlPUT = 'https://farel-app.herokuapp.com/upd/monitoring/' + monitoringId;

export function AmbilResponse(result) {
  console.log(result); // menampilkan response API pada console
  alert(result.message);
  window.location.href = 'tables_monitoring.html';
}
