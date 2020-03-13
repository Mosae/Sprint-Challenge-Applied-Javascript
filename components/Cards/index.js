// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


//send GET reguest
// for in loop through the object array
const cardData = axios.get('https://lambda-times-backend.herokuapp.com/articles').then(dataCards => {
        console.log(dataCards.data);
        console.log(dataCards.data.articles)
    })
    .catch(error => {
        console.log('data not returned', error)
    })
//creating a function
const mainContainer = document.querySelector('.cards-container');

function createData(data) {
    //create elements
    const cardDiv = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgDiv = document.createElement('div');
    const imgTag = document.createElement('img');
    const nameSpan = document.createElement('span');

    //add classes

    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgDiv.classList.add('img-container');


    //text content

    headlineDiv.textContent = data.healine;
    imgTag.src = data.authorPhoto;
    nameSpan.textContent = data.authorName;

    //append
    cardDiv.appendchild(headlineDiv);
    cardDiv.appendchild(authorDiv);
    authorDiv.appendchild(imgDiv);
    imgDiv.appendChild(imgTag);
    authorDiv.append(nameSpan);

    return cardDiv


}