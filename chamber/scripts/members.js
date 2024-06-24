const requestURL = 'data/members.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) { 
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusinesses);
  });


  function displayBusinesses(business) {
    let card = document.createElement('section');
    let iconImg = document.createElement('img');
    let h4 = document.createElement('h4');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let a = document.createElement('a');
  
    iconImg.setAttribute('src', business.imageurl);
    iconImg.setAttribute('alt', `Icon image for ${business.name}`);
    iconImg.setAttribute('loading', 'lazy');

    h4.textContent = `${business.name}`;
  
    p1.innerHTML = business.address + "<br><br>" + business.phone;

    p2.textContent = business.membership;

    a.textContent = business.website;
    a.setAttribute('href', '#'); 
  
    card.appendChild(iconImg);
    card.appendChild(h4);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(a);
  
    document.querySelector('.directory-grid').appendChild(card);
  }


  const directory = document.querySelector('.directory-grid')
  const dirpanelbutton = document.querySelector('#panel');
  const dirlistbutton = document.querySelector('#list');


  dirpanelbutton.addEventListener('click', () => {directory.classList.add('panelview')}, false);
  dirlistbutton.addEventListener('click', () => {directory.classList.remove('panelview')}, false);