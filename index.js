window.onload = panierPost;

function panierPost() {
    let xhr = new XMLHttpRequest();

    let method = "GET";

    let url = "articles.json"
 
    xhr.open(method, url);

    xhr.onload = function (event) {

        if (this.readyState === XMLHttpRequest.DONE) {

            if (this.status === 200) {
                const gotIt = JSON.parse(this.responseText);
                let output = ``;
                gotIt.forEach(function (post) {
                    output += `
                    <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${post.imageProduit}" alt="Card image cap">
                    <div class="card-body" >
                    <h6 class="card-title">${post.nomProduit}</h6>
                      <p class="card-text">${post.prixProduit}</p>
                      <button href="#" class="btn btn-primary">Ajouter au panier</button>
                    </div>
                  </div>`
                });
                document.querySelector(`#cards-article`).innerHTML = output;

                    let buttons = document.querySelectorAll('.btn-primary');
                    console.log(buttons);
                    console.log(typeof buttons);
                    for (let i = 0; i < buttons.length; i++) {
                         buttons[i].addEventListener('click', () => {
                              localStorage.setItem("item",);
                              let storage =  localStorage.getItem("item");
                             
                             document.querySelector('#panier-add').innerHTML = storage;
                           })
                    }
           }

            else {
                alert('Nein Nein Nein')
            }
        }
    }
    xhr.send();
}