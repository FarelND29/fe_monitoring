export function isiDataOrangTua(results) {
  const inputMapping = [
    { id: 'nama_ot', path: 'nama_ot' },
    { id: 'phone_number_ot', path: 'phone_number' }, //index: 0, property: 'nama_dokter'},
    { id: 'nama', path: 'anak.nama' }, //index: 0, property: 'spesialisasi'},
    { id: 'npm', path: 'anak.npm' },
    { id: 'jekel', path: 'anak.jekel' },
    { id: 'phone_number_mhs', path: 'anak.phone_number' },
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
