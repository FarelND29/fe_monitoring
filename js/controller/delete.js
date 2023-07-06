function deleteData(IDHAPUS) {
  var monitoringId = IDHAPUS;
  var target_url = 'https://farel-app.herokuapp.com/del/monitoring/' + monitoringId;

  var requestOptions = {
    method: 'DELETE',
    redirect: 'follow',
  };

  fetch(target_url, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      alert(result.message);
      location.reload();
    })
    .catch((error) => console.log('Error:', error));
}
