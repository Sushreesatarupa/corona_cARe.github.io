
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

var section = document.getElementById("displayResults");

function separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

async function showData() {
  const res = await fetch('https://api.covid19api.com/summary');
  const data = await res.json();

  console.log(data.Global)
  // output = `
    
  //   <span class="col-sm bg-warning element">Total Confirmed: ${data.Global.TotalConfirmed}</span>
  //   <span class="col-sm bg-warning element">Total Confirmed: +${data.Global.NewConfirmed}</span>
  //   <span class="col-sm bg-success element">Total Recovered: ${data.Global.TotalRecovered}</span>
  //   <span class="col-sm bg-success element">Total Recovered: +${data.Global.NewRecovered}</span>
  //   <span class="col-sm bg-danger element">Total Deaths: ${data.Global.TotalDeaths}</span>
  //   <span class="col-sm bg-danger element">Total Deaths: +${data.Global.NewDeaths}</span>
  // `
  tc = separators(data.Global.TotalConfirmed)
  tr = separators(data.Global.TotalRecovered)
  td = separators(data.Global.TotalDeaths)
  output =  `
  <tr style="font-weight: 800; font-size: 1.25rem;">
  <td>TOTAL</td>
    <td>${tc}</td>
    <td>${tr}</td>
    <td>${td}</td>
    </tr>
  `
 
  
  section.innerHTML = output;

  data.Countries.forEach(function (country, index) {
    //Using the createNode function to create new elements
    var divCol = createNode('tr'),
      h2 = createNode('td'),
      pConf = createNode('td'),
      //pActive = createNode('p'),
      pRec = createNode('td'),
      pDeaths = createNode('td');
    pNewRec = createNode('td');
    pNewDeaths = createNode('td');
    pNewConf = createNode('td');

    pDeaths.classList.add("bg-danger");
    pRec.classList.add("bg-success");
    pRec.classList.add("text-white");
    pDeaths.classList.add("text-white");

    h2.style.fontWeight = "600"

    //Assigning the data gotten from the API to the locally created elements
    h2.innerText = `${country.Country}`
    pConf.innerText = separators(`${country.TotalConfirmed}`)
    pRec.innerText = separators(`${country.TotalRecovered}`)
    pDeaths.innerText = separators(`${country.TotalDeaths}`)
  
    //Appending children to parents
    appendChildFunction(divCol, h2);
    appendChildFunction(divCol, pConf);
    appendChildFunction(divCol, pRec);
    appendChildFunction(divCol, pDeaths);

    appendChildFunction(section, divCol);

  });
}

function createNode(element) {
  //Creates a new element
  return document.createElement(element);
}

function appendChildFunction(parent, element) {
  //Appends child to parent function
  return parent.appendChild(element)
}

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}