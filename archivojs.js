fetch ('https://japceibal.github.io/emercado-api/cats_products/101.json')
.then(response => response.json())
.then(data => {
  console.log(data.products)
var mainContainer = document.getElementById("myData");
  for (let i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = 'Id: ' + data.products[i].id + br + 'Name: ' + data.products[i].name + br + 'Description: ' + data.products[i].description + br + 'Cost: ' + data.products[i].cost + br + 'Currency: ' + data.products[i].currency + br + 'SoldCount: ' + data.products[i].soldCount + br + 'Image: ' + data.products[i].image;
 mainContainer.appendChild(div);
  }})
.catch(error => console.log(error))



