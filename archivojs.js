fetch ('https://japceibal.github.io/emercado-api/cats_products/101.json')
.then(response => response.json())
.then(data => { console.log(data.products)
               var mainContainer = document.getElementById("myData");
  for (let i = 0; i < 5; i++) {
    var div = document.createElement("div");
              div.innerHTML = JSON.stringify(data.products[0].id);
     mainContainer.appendChild(div);
              })
.catch(error => console.log(error))



