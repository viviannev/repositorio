fetch ('https://japceibal.github.io/emercado-api/cats_products/101.json')
.then(response => response.json())
.then(data => { console.log(data.products)
               document.getElementById("myData").innerText = "Your new text here" 
              })
.catch(error => console.log(error))



