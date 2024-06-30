const requestURL = 'data/members.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject['businesses'];
    chooseHighlights(businesses);
  });


  function chooseHighlights(businesses){

    const filteredMembership = businesses.filter(function (business) {
        return business.membership == "gold" ||
              business.membership == "silver";
    });

    const shuffledMembership = filteredMembership.sort(() => 0.5 - Math.random());

    displayHighlight(shuffledMembership[0], "#spotlight1");
    displayHighlight(shuffledMembership[1], "#spotlight2");
    displayHighlight(shuffledMembership[2], "#spotlight3");
  }

  function displayHighlight(business, elementID) {

    let pName = document.createElement('h3');
    let logoImg = document.createElement('img');
    let pSlogan = document.createElement('p');
    let hr = document.createElement('hr');
    let pSpotinfo = document.createElement('p');
    let a = document.createElement('a');

    pName.innerHTML = `${business.name}`;
    pName.setAttribute('class', 'large');

    logoImg.setAttribute('src', business.imageurl);
    logoImg.setAttribute('class', 'spotlightImg');  
    logoImg.setAttribute('alt', `Logo image for ${business.name}`);
    logoImg.setAttribute('loading', 'lazy');
  


    pSlogan.textContent = `"${business.slogan}"`;
    pSlogan.setAttribute('class', 'small bold italic');   
 

    hr.style.margin = "2px";

    pSpotinfo.innerHTML += business.phone + " | " + business.membership + " | ";
    pSpotinfo.classList.add('spotinfo');

    a.textContent = "website";
    a.setAttribute('href', "#");
  
    pSpotinfo.appendChild(a);

    const spotlightContainer = document.querySelector(elementID)

    spotlightContainer.removeChild(spotlightContainer.firstElementChild);
  
    spotlightContainer.appendChild(logoImg);
    spotlightContainer.appendChild(pName);
    spotlightContainer.appendChild(pSlogan);
    spotlightContainer.appendChild(hr);
    spotlightContainer.appendChild(pSpotinfo);



  }
 