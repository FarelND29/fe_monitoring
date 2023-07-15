//mendapatkan parameter dari url DosenWali
const urlParams = new URLSearchParams(window.location.search);
const dosenwaliId = urlParams.get('dosenwaliId');

export let urlFetch = 'https://farel-app.herokuapp.com/dosenwali/' + dosenwaliId;