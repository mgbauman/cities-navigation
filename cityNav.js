
async function getCities() {
  let request = await fetch("./Files/navigation.json");
  const cities = await request.json();
  console.log(cities);
}

getCities();
