//mendapatkan parameter dari url

const urlParams = new URLSearchParams(window.location.search);
const monitoringId = urlParams.get('monitoringId');

export let urlFetch = 'https://dimasardnt6-ulbi.herokuapp.com/antrian/' + antrianId;