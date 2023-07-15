//mendapatkan parameter dari url Monitoring
const urlParams = new URLSearchParams(window.location.search);
const monitoringId = urlParams.get('monitoringId');

export let urlFetch = 'https://farel-app.herokuapp.com/monitoring/' + monitoringId;