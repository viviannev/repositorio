fetch ('https://japceibal.github.io/emercado-api/cats_products/101.json')
.then(response => response.json())
.then(data => { console.log(data.products[0].id)
              document.querySelector("#myData").innerText = data.products[0].id})
.catch(error => console.log(error))



