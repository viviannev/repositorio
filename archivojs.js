fetch ('https://japceibal.github.io/emercado-api/cats_products/101.json')
.then(response => response.json())
.then(data => { console.log(data)
               document.getElementbyId("myData").innerHTML = "Products: " + "<br />" + "<br />" + "Id: " + data.products[0].id + "<br />" +
                 "Name: " + data.products[0].name + "<br />" +
                 "Description: " + data.products[0].description + "<br />" +
                 "Cost: " + data.products[0].cost + "<br />" +
                 "Currency: " + data.products[0].currency + "<br />" +
                 "SoldCount: " + data.products[0].soldCount + "<br />" +
                 "Image: " + data.products[0].image + "<br />" + "<br />" +
                  "Id: " + data.products[1].id + "<br />" +
                 "Name: " + data.products[1].name + "<br />" +
                 "Description: " + data.products[1].description + "<br />" +
                 "Cost: " + data.products[1].cost + "<br />" +
                 "Currency: " + data.products[1].currency + "<br />" +
                 "SoldCount: " + data.products[1].soldCount + "<br />" +
                 "Image: " + data.products[1].image + "<br />" + "<br />" +
                  "Id: " + data.products[2].id + "<br />" +
                 "Name: " + data.products[2].name + "<br />" +
                 "Description: " + data.products[2].description + "<br />" +
                 "Cost: " + data.products[2].cost + "<br />" +
                 "Currency: " + data.products[2].currency + "<br />" +
                 "SoldCount: " + data.products[2].soldCount + "<br />" +
                 "Image: " + data.products[2].image + "<br />" + "<br />" +
                  "Id: " + data.products[3].id + "<br />" +
                 "Name: " + data.products[3].name + "<br />" +
                 "Description: " + data.products[3].description + "<br />" +
                 "Cost: " + data.products[3].cost + "<br />" +
                 "Currency: " + data.products[3].currency + "<br />" +
                 "SoldCount: " + data.products[3].soldCount + "<br />" +
                 "Image: " + data.products[3].image + "<br />" + "<br />" +
                  "Id: " + data.products[4].id + "<br />" +
                 "Name: " + data.products[4].name + "<br />" +
                 "Description: " + data.products[4].description + "<br />" +
                 "Cost: " + data.products[4].cost + "<br />" +
                 "Currency: " + data.products[4].currency + "<br />" +
                 "SoldCount: " + data.products[4].soldCount + "<br />" +
                 "Image: " + data.products[4].image
              })
.catch(error => console.log(error))



