export function isiDataDosenWali(results) {
  const inputMapping = [
    { id: 'nama_dosen', path: 'nama_dosen' },
    { id: 'alamat', path: 'alamat' },
    { id: 'phone_number_dosen', path: 'phone_number' },
    { id: 'email', path: 'email' },
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
