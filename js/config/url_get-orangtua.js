//mendapatkan parameter dari url OrangTua
const urlParams = new URLSearchParams(window.location.search);
const orangtuaId = urlParams.get('orangtuaId');

export let urlFetch = 'https://farel-app.herokuapp.com/orangtua/' + orangtuaId;