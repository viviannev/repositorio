const promise = fetch ('https://japceibal.github.io/emercado-api/cats_products/101.json')
 .then(function (response) {
    return response.json();
  })
  .then(data => {
   function appendData(data) {
  var m1 = document.getElementById("myData");
  for (let i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = 'Id: ' + data[i].id + br + 'Name: ' + data[i].name + br + 'Description: ' + data[i].description + br + 'Cost: ' + data[i].cost + br + 'Currency: ' + data[i].currency + br + 'SoldCount: ' + data[i].soldCount + br + 'Image: ' + data[i].image;
 m1.appendChild(div);
  }
}
  


 


// let promise = fetch ('https://japceibal.github.io/emercado-api/cats_products/101.json')

//.then(response => response.json)
//.then(data => console.log(data))
//.catch(error => console.log(error))



console.log(promise) 
console.log(typeof promise)

//let listado = JSON.stringify(promise);
//console.log(listado.products); 
