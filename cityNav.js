async function getCities() {
  let request = await fetch("./Files/navigation.json");
  const cities = await request.json();
  populateNavigation(cities);
}

function populateNavigation(obj) {
  const unorderedListElement = document.querySelector('#cities');
  const cities = obj['cities'];

  for (const city of cities) {
    const linkTag= document.createElement('a');
    linkTag.className = 'nav-item';
    linkTag.href = '#';
    linkTag.textContent = city.label;
    linkTag.addEventListener("click", function() {
      let current = document.querySelector(".nav-item.active");
      if (current) {
        current.className = current.className.replace(" active", "");
      }
      this.className += " active";
    });

    unorderedListElement.appendChild(linkTag);
  }
}

getCities();