fetch('http://localhost:3000/')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Log or use the JSON data
    console.log(data);

    
    const propertyList = document.getElementById('property-list');

    data.forEach(property => {
      const propertyItem = document.createElement('div');
      propertyItem.classList.add('property');

      const image = document.createElement('img');
      image.src = property.image;
      image.alt = property.name;

      const detailsDiv = document.createElement('div');
      detailsDiv.classList.add('property-details');

      const propertyName = document.createElement('h3');
      propertyName.textContent = property.name;

      const price = document.createElement('p');
      price.textContent = `Price: $${property.price.toLocaleString()}`;

      const location = document.createElement('p');
      location.textContent = `Location: ${property.location}`;

      const viewDetailsLink = document.createElement('a');
      viewDetailsLink.href = '#';
      viewDetailsLink.classList.add('btn', 'view-details');
      viewDetailsLink.textContent = 'View Details';

      detailsDiv.appendChild(propertyName);
      detailsDiv.appendChild(price);
      detailsDiv.appendChild(location);
      detailsDiv.appendChild(viewDetailsLink);

      propertyItem.appendChild(image);
      propertyItem.appendChild(detailsDiv);

      propertyList.appendChild(propertyItem);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);

  });

  function filterProperties() {
    // Fetch selected property type
    const propertyType = document.querySelector('input[name="propertyType"]:checked').value;

    // Implement your filtering logic here
    console.log('Filtering properties by type:', propertyType);
  }