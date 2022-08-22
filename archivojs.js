fetch ('https://japceibal.github.io/emercado-api/cats_products/101.json')
.then(response => response.json())
.then(data => { console.log(data.products)
               document.querySelector("#myData").innerText = "Id: " + data.products[0].id + "Name: " + data.products[0].name + "Description: " + data.products[0].description + "Cost: " + data.products[0].cost + "Currency: " + data.products[0].currency + "SoldCount: " + data.products[0].soldCount + "Image: " + data.products[0].image
               
              })
.catch(error => console.log(error))



