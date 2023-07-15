export function isiDataMahasiswa(results) {
  const inputMapping = [
    { id: 'nama', path: 'nama' }, 
    { id: 'npm', path: 'npm' },
    { id: 'jekel', path: 'jekel' },
    { id: 'phone_number_mhs', path: 'phone_number' },
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
