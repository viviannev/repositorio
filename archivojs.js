let promise = fetch ('https://japceibal.github.io/emercado-api/cats_products/101.json')

.then(response => response.json)
.then(data => console.log(data))
.catch(error => console.log(error))



console.log(promise) 
console.log(typeof promise)

var mainContainer = document.getElementById("myData");
 function appendData(data) {
            var mainContainer = document.getElementById("myData");
            promise.forEach (let i = 0; (i < data.length); i++) {
      
                document.getElementbyId('myData').innerHTML = 'Id: ' + data[i].id + br + 'Name: ' + data[i].name + br + 'Description: ' + data[i].description + br + 'Cost: ' + data[i].cost + br + 'Currency: ' + data[i].currency + br + 'SoldCount: ' + data[i].soldCount + br + 'Image: ' + data[i].image;
            }}
