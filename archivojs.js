let promise = fetch ('https://japceibal.github.io/emercado-api/cats_products/101.json')

.then(response => response.json)
.then(data => console.log(data))
.catch(error => console.log(error))



console.log(promise) 
console.log(typeof promise)


function creardiv(){
let div = document.createElement('p');
    p.id = 'container';
    p.innerHTML = 'Hi there!';
}
  

  
