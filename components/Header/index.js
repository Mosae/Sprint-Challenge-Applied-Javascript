// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const parent = document.querySelector('.header-container');

function Header() {
    // define new elements
    const header = document.createElement('div');
    const dateSpan = document.createElement('span');
    const h1Tag = document.createElement('h1');
    const tempSpan = document.createElement('span');
    // setup the structure of our elements
    header.appendChild(dateSpan);
    header.appendChild(h1Tag);
    header.appendChild(tempSpan);
    console.log(header)
    // add classes to elements

    // set text content



    return header
}