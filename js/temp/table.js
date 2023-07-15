export let isiTabel = `<tbody>
<tr>
  <td>
    <div class="w-auto">
        <p class="text-xs font-semibold text-coolGray-800">#NAMAORTU#</p>
        <p class="text-xs font-medium text-coolGray-500">#NOHPORTU#</p>
    </div>
  </td>
  <td>
    <div class="w-auto">
        <p class="text-xs font-semibold text-coolGray-800">#NAMAANAK#</p>
        <p class="text-xs font-semibold text-coolGray-800">#NPM#</p>
        <p class="text-xs font-semibold text-coolGray-800">#JEKEL#</p>
        <p class="text-xs font-medium text-coolGray-500">#NOHPANAK#</p>
    </div>
  </td>
  <td class="text-left">#TEMA#</td>
  <td>
  <div class="w-auto">
        <p class="text-xs font-semibold text-coolGray-800">#NAMADOSEN#</p>
        <p class="text-xs font-semibold text-coolGray-800">#ALAMAT#</p>
        <p class="text-xs font-semibold text-coolGray-800">#NOHPDOSEN#</p>
        <p class="text-xs font-semibold text-coolGray-800">#EMAIL#</p>
    </div>
    </td>
  <td>#TANGGAL#</td>
  <td>#HARI#</td>
  <th class="whitespace-nowrap bg-white text-sm font-medium text-coolGray-800">
<a type="button"  href="detailed.html?monitoringId=#IDETAILED#"> detailed 
</a>
|
<a type="button" href="edit_Monitoring.html?monitoringId=#IDEDIT#"> Edit
</a>
|
<a style="color:red" type="button" id="del_button" onclick="deleteDataMonitoring('#IDHAPUS#')"> Delete
</a>
</th>
</tr>
</tbody>`;

export let isiTableMhs = `<tbody>
<tr>
  <td>
    <div class="w-auto">
        <p class="text-xs font-semibold text-coolGray-800">#NAMAANAK#</p>
    </div>
  </td>
  <td class="text-left">#NPM#</td>
  <td>
  <div class="w-auto">
        <p class="text-xs font-semibold text-coolGray-800">#JEKEL#</p>
    </div>
    </td>
  <td>#NOHPANAK#</td>
  <th class="whitespace-nowrap bg-white text-sm font-medium text-coolGray-800">
<a type="button" href="edit_mahasiswa.html?mahasiswaId=#IDEDIT#"> Edit
</a>
|
<a style="color:red" type="button" id="del_button" onclick="deleteDataMahasiswa('#IDHAPUS#')"> Delete
</a>
</th>
</tr>
</tbody>`;

export let isiTabelOrtu = `<tbody>
  <tr>
  <td>
  <div class="w-auto">
      <p class="text-xs font-semibold text-coolGray-800">#NAMAORTU#</p>
  </div>
  </td>
  <td>
  <div class="w-auto">
      <p class="text-xs font-semibold text-coolGray-800">#NOHPORTU#</p>
  </div>
  </td>
  <td>
    <div class="w-auto">
        <p class="text-xs font-semibold text-coolGray-800">#NAMAANAK#</p>
        <p class="text-xs font-semibold text-coolGray-800">#NPM#</p>
        <p class="text-xs font-semibold text-coolGray-800">#JEKEL#</p>
        <p class="text-xs font-medium text-coolGray-500">#NOHPANAK#</p>
    </div>
  </td>
  <th class="whitespace-nowrap bg-white text-sm font-medium text-coolGray-800">
<a type="button" href="edit_orangtua.html?orangtuaId=#IDEDIT#"> Edit
</a>
|
<a style="color:red" type="button" id="del_button" onclick="deleteDataOrangTua('#IDHAPUS#')"> Delete
</a>
</th>
</tr>
</tbody>`;

export let isiTabelDosen = `<tbody>
<tr>
  <td>
    <div class="w-auto">
        <p class="text-xs font-semibold text-coolGray-800">#NAMADOSEN#</p>
    </div>
  </td>
  <td class="text-left">#ALAMAT#</td>
  <td>
  <div class="w-auto">
        <p class="text-xs font-semibold text-coolGray-800">#NOHPDOSEN#</p>
    </div>
    </td>
  <td>#EMAIL#</td>
  <th class="whitespace-nowrap bg-white text-sm font-medium text-coolGray-800">
<a type="button" href="edit_dosenwali.html?dosenwaliId=#IDEDIT#"> Edit
</a>
|
<a style="color:red" type="button" id="del_button" onclick="deleteDataDosenWali('#IDHAPUS#')"> Delete
</a>
</th>
</tr>
</tbody>`;
