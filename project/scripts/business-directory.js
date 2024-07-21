// Store the resource of the JSON URL file into a variable.
const requestURL = 'data/members.json';

/* JSON file object information:
 * 'businesses' - contains a list of objects.
 * 'name' - holds the name of the company.
 * 'name_add' - holds an additional title for the company. 
 * 'address' - holds the address of the company.
 * 'logo' - contains a 300x200px image of the company's logo.
 * 'mem_lvl' - holds the current membership level of the company. 
*/   

const cards = document.querySelector('#directory-area');

fetch(requestURL)
  .then(function (response) { // returns a Promise which will be used as an argument.
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const varObj = jsonObject['businesses']; // Store the results into an array since that data source is an array.
    varObj.forEach(displayEachObj); // Call the forEach() method which will loop through each record to be processed.
  });

function displayEachObj(business) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let image = document.createElement('img');
  let h3 = document.createElement('h3');
  let sh = document.createElement('p');

  let div_0 = document.createElement('div');
  let div_1 = document.createElement('div');

  let h4_1 = document.createElement('h4');

  let par1 = document.createElement('p');

  // Change the textContent property of the h3 element to contain the prophet's full name
  h3.textContent = business.name;
  sh.textContent = business.name_add;
  h4_1.textContent = ""
  par1.textContent = business.goal;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  //image.setAttribute('src', business.logo);
  image.setAttribute('src', business.logo)
  image.setAttribute('alt', 'Logo of ' + business.name);
  image.setAttribute('width', '300');
  image.setAttribute('height', '200');

  // Extra: Add classes to the elements to help with stylizing.
  card.classList.add("card");
  image.classList.add("card-logo");
  h3.classList.add("card-title");
  sh.classList.add("card-subtitle");

  div_0.classList.add("card-titles");
  div_1.classList.add("card-address");

  // Append the section(card) with the h3 element and portrait.
  card.appendChild(image);

  div_0.appendChild(h3);
  div_0.appendChild(sh);
  card.appendChild(div_0);

  div_1.appendChild(h4_1);
  div_1.appendChild(par1);
  card.appendChild(div_1);

  // Append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}

/* Grid & List Swap Buttons */
const cardButton = document.querySelector("#button-cards");
const listButton = document.querySelector("#button-list");
const display = document.querySelector("#directory-area");

cardButton.addEventListener("click", viewCards); 
listButton.addEventListener("click", viewList);

function viewCards() {
  cardButton.classList.add("button-selected");
  listButton.classList.remove("button-selected");
  display.classList.remove("view-list");
  display.classList.add("view-card");
}
function viewList() {
  listButton.classList.add("button-selected");
  cardButton.classList.remove("button-selected");
  display.classList.remove("view-card");
  display.classList.add("view-list");
}

