/*Milestone 1
Sfruttando gli screen e gli asset in allegato riproduciamo 
la grafica proposta in maniera statica: utilizzando soltanto HTML e CSS 
e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)

Milestone 2
Utilizzando Postman, testiamo una chiamata all’endpoint di JSON Placeholder:
https://jsonplaceholder.typicode.com/photos?_limit=6
Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.

Milestone 3
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API di JSON Placeholder, 
sfruttando la risposta per generare dinamicamente in pagina una serie di foto!

Bonus
rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano
 man mano una sotto l’altra ed il titolo abbia una dimensione adeguata 
*/

const cardEl = document.querySelector('.cards');
//eseguzione chiamata
axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
  .then(response => {
    const cards = response.data
    console.log(cards);
    
    //ciclare nelle cards
    let cardEls = "";
    cards.forEach(card => {
        const {albumID, id, title, url, thumbnailUrl} = card;

        //markup
        const markup = `<div class="col 4 p-3">
                    <div class="card rounded-0  ">
                        <img class="p-3" scr="${url}">
                        <p>${title}</p>
                    </div>
                </div>`
                cardEls += markup
    });
    cardEl.innerHTML = cardEls
}).catch(err => console.error(err))


