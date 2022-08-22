fetch ('https://japceibal.github.io/emercado-api/cats_products/101.json')
.then(response => response.json())
.then(data => { console.log(data.products)
               document.getElementbyId("myData").innerHTML = "Id: " + data.products[0].id + "<br />" +
                 "Name: " + data.products[0].name + "<br />" +
                 "Description: " + data.products[0].description + "<br />" +
                 "Cost: " + data.products[0].cost + "<br />" +
                 "Currency: " + data.products[0].currency + "<br />" +
                 "SoldCount: " + data.products[0].soldCount + "<br />" +
                 "Image: " + data.products[0].image               
              })
.catch(error => console.log(error))



