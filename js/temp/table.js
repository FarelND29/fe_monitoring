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
  <th class="whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800">
<a type="button" href="edit.html?presensiId=#IDEDIT#"> Edit
</a>
|
<button type="button" id="del_button" onclick="deleteData('#IDHAPUS#')"> Delete
</button>
</th>
</tr>
</tbody>`;
