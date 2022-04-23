/**
 * Retrieves JSON data and then adds it to the navigation.
 */
async function populate() {
  const request = await fetch("./Files/navigation.json");
  const cities = await request.json();
  populateNavigation(cities);
}

/**
 * Populates the navigation with the cities retrieved from the JSON file.
 *
 * @param jsonResponse The retrieved JSON data.
 */
function populateNavigation(jsonResponse) {
  const unorderedListElement = document.querySelector('#cities');
  const cities = jsonResponse['cities'];

  for (const city of cities) {
    const linkTag= document.createElement('a');
    linkTag.className = 'nav-item';
    linkTag.href = '#';
    linkTag.textContent = city.label;

    linkTag.addEventListener("click", function(event) {
      let current = document.querySelector(".nav-item.active");
      if (current) {
        current.className = current.className.replace(" active", "");
      }
      this.className += " active";
      resizeNavigationIndicator(event.target);
    });

    unorderedListElement.appendChild(linkTag);
  }
}

/**
 * Resizes the navigation indicator to match the selected item.
 *
 * @param target the selected item in the navigation.
 */
function resizeNavigationIndicator(target) {
  const navigationIndicator = document.querySelector('#navigation-indicator');
  navigationIndicator.style.width = target.offsetWidth + 'px';
  navigationIndicator.style.left = target.offsetLeft + 'px';
}

window.addEventListener("resize", function(event) {
  const activeItem = document.querySelector('.nav-item.active');
  resizeNavigationIndicator(activeItem);
});

populate();