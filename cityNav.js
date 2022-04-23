
async function getCities() {
  let request = await fetch("./Files/navigation.json");
  const cities = await request.json();
  populateNavigation(cities);
}

function populateNavigation(obj) {
  const unorderedListElement = document.querySelector('#cities');
  const cities = obj['cities'];

  for (const city of cities) {
    const listItem = document.createElement('li');
    const linkTag= document.createElement('a');

    linkTag.textContent = city.label;
    listItem.appendChild(linkTag);

    unorderedListElement.appendChild(listItem);
  }
}

getCities();