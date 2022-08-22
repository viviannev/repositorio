function showTable(){
  fetch('https://japceibal.github.io/emercado-api/cats_products/101.json')
    .then(response => response.json())
    .then(data => createTable(data));
}

function createTable(data) {
var table = "<table border=1>";
// add a row for name and marks
table += `<tr>
            <th>Products</th>
          </tr>`;
// now add another row to show subject
table += `<tr>
            <th></th>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Cost</th>
            <th>Currency</th>
            <th>SoldCount</th>
            <th>Image</th>
          </tr>`;
// now loop through students
// show their name and marks
var tr = "";
for(let i = 0; i < data.products.length; i++) {
  tr += "<tr>";
  tr += `<td>${data.products[i].id}</td>`;
  tr += `<td>${data.products[i].name}</td>`;
  tr += `<td>${data.products[i].description}</td>`;
  tr += `<td>${data.products[i].cost}</td>`;
  tr += `<td>${data.products[i].currency}</td>`;
  tr += `<td>${data.products[i].soldCount}</td>`;
  tr += `<td>${data.products[i].image}</td>`;
  tr += "</tr>"
}
table += tr + "</table>";

  // append table to body
  document.body.innerHTML += table;
}
