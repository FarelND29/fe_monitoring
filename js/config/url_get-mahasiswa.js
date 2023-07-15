//mendapatkan parameter dari url Mahasiswa
const urlParams = new URLSearchParams(window.location.search);
const mahasiswaId = urlParams.get('mahasiswaId');

export let urlFetch = 'https://farel-app.herokuapp.com/mahasiswa/' + mahasiswaId;