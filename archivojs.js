fetch('https://japceibal.github.io/emercado-api/cats_products/101.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });

let div = document.createElement('div');
    div.id = 'container';
    div.innerHTML = 'Hi there!';

  

  
