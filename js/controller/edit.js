export function isiData(results) {
  const inputMapping = [
    { id: 'nama_ot', path: 'ortu.nama_ot' },
    { id: 'phone_number_ot', path: 'ortu.phone_number' }, //index: 0, property: 'nama_dokter'},
    { id: 'nama', path: 'ortu.anak.nama' }, //index: 0, property: 'spesialisasi'},
    { id: 'npm', path: 'ortu.anak.npm' },
    { id: 'jekel', path: 'ortu.anak.jekel' },
    { id: 'phone_number_mhs', path: 'ortu.anak.phone_number' },
    { id: 'nama_tema', path: 'tema.nama_tema' },
    { id: 'nama_dosen', path: 'dosen.nama_dosen' },
    { id: 'alamat', path: 'dosen.alamat' },
    { id: 'phone_number_dosen', path: 'dosen.phone_number' },
    { id: 'email', path: 'dosen.email' },
    { id: 'tanggal', path: 'tanggal' },
    { id: 'hari', path: 'hari' },
  ];

  inputMapping.forEach(({ id, path, index, property }) => {
    const inputElement = document.getElementById(id);
    const value = getNestedValue(results, path, index, property);
    inputElement.value = value;
  });
}

function getNestedValue(obj, path, index, property) {
  const value = path.split('.').reduce((value, key) => (value && value[key] ? value[key] : ''), obj);
  // console.log(`Value at path ${path}:`, value);

  if (Array.isArray(value) && value.length > index && value[index].hasOwnProperty(property)) {
    return value[index][property];
  }

  return value;
}
