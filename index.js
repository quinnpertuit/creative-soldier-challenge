window.addEventListener("load", () => {
  let xhr = new XMLHttpRequest();
  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  })
  let table = document.getElementById("table");
  xhr.open("GET", "./curl_request.php");
  xhr.responseType = "json";
  xhr.onload = function() {
    if (xhr.status === 200) {
      let response = xhr.response;
      table.innerHTML += `<tr class="table__headers">
                            <th>Apartment Name</th>
                            <th># Bedrooms</th>
                            <th># Bathrooms</th>
                            <th>Floorplan Name</th>
                            <th>Rent</th>
                            <th>Apply</th>
                          </tr>`;
      for (let apartment in response) {
        let { ApartmentName, Beds, Baths, FloorplanName, MinimumRent, MaximumRent, ApplyOnlineURL } = response[apartment];
        table.innerHTML += `<tr>
                              <td> ${ApartmentName} </td>
                              <td> ${Beds} </td>
                              <td> ${Baths} </td>
                              <td> ${FloorplanName} </td>
                              <td> ${formatter.format(MinimumRent)} - ${formatter.format(MaximumRent)} </td>
                              <td> <a href="${ApplyOnlineURL}">Link</a></td>
                            </tr>`;
      }
    } else {
      alert("Request failed.  Returned status of " + xhr.status);
    }
  };
  xhr.send();
});