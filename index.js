const fs = require('fs').promises; // Use fs.promises for async file operations

const url = "https://zillow-com1.p.rapidapi.com/valueHistory/localRentalRates";
const apiKey = "83827e693fmshef19fdf648ff644p14635ajsn97b0340";

async function fetchData() {
  let fetch;
  try {
    // Attempt to import 'node-fetch' using dynamic import syntax
    const { default: fetchModule } = await import('node-fetch');
    fetch = fetchModule;
  } catch (err) {
    // Handle any errors, such as module not found or other issues
    console.error('Error importing node-fetch:', err);
    throw err; // Throw the error to handle it further upstream
  }

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const jsonData = JSON.stringify(data, null, 2);
    const filePath = './home/brendan-gwer/Development/code/phase-1/My-real-estate-website/package.json'; // Adjust file path as needed

    await fs.writeFile(filePath, jsonData, 'utf8');
    console.log(`JSON data saved to ${filePath}`);
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

fetchData();