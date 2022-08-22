fetch ('https://japceibal.github.io/emercado-api/cats_products/101.json')

.then(response => response.json)
.then(data => console.log(data))
.catch(error => console.log(error))


function appendData(data) {
  let mainContainer = document.getElementById("myData");
  for (let i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = 'Id: ' + data[i].id + br + 'Name: ' + data[i].name + br + 'Description: ' + data[i].description + br + 'Cost: ' + data[i].cost + br + 'Currency: ' + data[i].currency + br + 'SoldCount: ' + data[i].soldCount + br + 'Image: ' + data[i].image;
 mainContainer.appendChild(div);
  }
}
