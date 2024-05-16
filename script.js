let itemsList = {
    kectchup :{
        knoor :{
            image :  'knoor.webp',
            price : 350,
            quantity : '1kg',
            // flavour : 'Chilli Garlic'
        },
        shangrila :{
            image:'https://static-01.daraz.pk/p/aec9eef9347d97f690a35570846c7bdb.jpg_300x0q75.webp',
            price :300,
            quantity : '1.5kg',
            // flavour : 'Tomato '
        }
    },
    grocessary :{
        flour :{
            image: 'https://static-01.daraz.pk/p/356909afb2514094f45f1350c36f0404.jpg_300x0q75.webp',
            price : 1500 ,
            quantity : '10kg',
            company : 'Bake Parlour'

        },
        ghee:{
            image : 'https://static-01.daraz.pk/p/49829fac357822361364ed8b82b02f8f.jpg_300x0q75.webp',
            price : 1600 ,
            quantity : '5kg',
        },
        sugar:{
            image : 'https://static-01.daraz.pk/p/72ddaf8c11a6ab26c603c08ddd79c508.jpg_300x0q75.webp',
            price : 600 ,
            quantity : '10kg',
        }
    }
}
var main = document.getElementById('main');
for (var key in itemsList) {
    var itemobject = itemsList[key] // 1 property
    console.log(itemobject);
    for (var key1 in itemsList[key]) {
        var productobject = itemsList[key][key1] // 1 propery ke ander ke items 
        main.innerHTML += `
        <div class="col-12 col-sm-6 col-md-5 col-lg-4 gap-1 mb-4">
        <div class="card" style="width: 18rem;">
          <img src="${productobject.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${key1.toUpperCase()}</h5>
            <p class="card-text"><strong>Price :</strong>  ${productobject.price} PKR <br/> <strong>Quantity</strong> ${productobject.quantity}
              </p>
            

          </div>
        </div>
      </div>
        
        `
    }
}
