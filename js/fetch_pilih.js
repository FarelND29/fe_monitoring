fetch("https://farel-app.herokuapp.com/all-mahasiswa")
  .then((response) => response.json())
  .then((data) => {
    const namaMahasiswa = document.getElementById("nama");
    const Mahasiswa = document.getElementById("namamhs");
    const npmMahasiswa = document.getElementById("npm");
    const jekelMahasiswa = document.getElementById("jekel");
    const nohpMahasiswa = document.getElementById("phone_number_mhs");

    // Generate options for each data item
    data.forEach((item) => {
      const option = document.createElement("option");
      option.value = item._id;
      option.text = item.nama;
      namaMahasiswa.appendChild(option);
    });

    // Event listener for polyclinic code dropdown change
    namaMahasiswa.addEventListener("change", () => {
      const selectedId = namaMahasiswa.value;
      const selectedMahasiswa = data.find((item) => item._id === selectedId);

      if (selectedMahasiswa) {
        Mahasiswa.value = selectedMahasiswa.nama;
        npmMahasiswa.value = selectedMahasiswa.npm;
        jekelMahasiswa.value = selectedMahasiswa.jekel;
        nohpMahasiswa.value = selectedMahasiswa.phone_number;
      } else {
        npmMahasiswa.value = "";
        jekelMahasiswa.value = "";
        nohpMahasiswa.value = "";
      }
    });
  })
  .catch((error) => console.log(error));


fetch("https://farel-app.herokuapp.com/all-orangtua")
  .then((response) => response.json())
  .then((data) => {
    const namaOrtu = document.getElementById("nama_ot");
    const Ortu = document.getElementById("nama_ortu");
    const nohpOrtu = document.getElementById("phone_number_ot");

    // Generate options for each data item
    data.forEach((item) => {
      const option = document.createElement("option");
      option.value = item._id;
      option.text = item.nama_ot;
      namaOrtu.appendChild(option);
    });

    // Event listener for polyclinic code dropdown change
    namaOrtu.addEventListener("change", () => {
      const selectedId = namaOrtu.value;
      const selectedOrtu = data.find((item) => item._id === selectedId);

      if (selectedOrtu) {
        Ortu.value = selectedOrtu.nama_ot;
        nohpOrtu.value = selectedOrtu.phone_number;
      } else {
        Ortu.value = "";
        nohpOrtu.value = "";
      }
    });
  })
  .catch((error) => console.log(error));

fetch("https://farel-app.herokuapp.com/all-dosenwali")
  .then((response) => response.json())
  .then((data) => {
    const namaDosen = document.getElementById("nama_dosen");
    const Dosen = document.getElementById("namadosen");
    const alamatDosen = document.getElementById("alamat");
    const emailDosen = document.getElementById("email");
    const nohpDosen = document.getElementById("phone_number_dosen");

    // Generate options for each data item
    data.forEach((item) => {
      const option = document.createElement("option");
      option.value = item._id;
      option.text = item.nama_dosen;
      namaDosen.appendChild(option);
    });

    // Event listener for polyclinic code dropdown change
    namaDosen.addEventListener("change", () => {
      const selectedId = namaDosen.value;
      const selectedDosen = data.find((item) => item._id === selectedId);

      if (selectedDosen) {
        Dosen.value = selectedDosen.nama_dosen;
        alamatDosen.value = selectedDosen.alamat;
        emailDosen.value = selectedDosen.email;
        nohpDosen.value = selectedDosen.phone_number;
      } else {
        alamatDosen.value = "";
        emailDosen.value = "";
        nohpDosen.value = "";
      }
    });
  })
  .catch((error) => console.log(error));