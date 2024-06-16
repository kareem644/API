/*
async function search() {
    const searchInput = document.getElementById('searchInput').value;
    const url = `https://api.weatherapi.com/v1/search.json?key=ba911215873245f4a10184739241506&q=${encodeURIComponent(searchInput)}`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        displayResults(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayResults(data) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    data.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('result-item');
        itemElement.textContent = ${item.title}: ${item.description};
        resultsContainer.appendChild(itemElement);
    });
}
*/
// var allposts = [];
// var req = new XMLHttpRequest();
// req.open('get','https://api.weatherapi.com/v1/search.json?key=ba911215873245f4a10184739241506&q=londo');
// req.send();
// req.addEventListener('readystatechange', function () {
//     if (req.readyState == 4) {
//         console.log(JSON.parse(req.response));
//         displayallposts();
//     }
// });

// function displayallposts() {
//     var display = '';
//     for (var i = 0; i < allposts.length; i++) {
//         display += `<div class="col-md-4 bg-white">
//         <h1>${allposts[i].name}</h1>
//         <h2>${allposts[i].region}</h2>
//         <h3>${allposts[i].country}</h3>
//         <h4>${allposts[i].lat}</h4>
//         <h5>${allposts[i].lon}</h5>
//         </div>`;
//     }
// document.querySelector('.myposts').innerHTML = display;

// }


function fetchData() {
    const searchInput = document.getElementById('searchInput').value.trim();

    if (searchInput === '') {
        alert('Please enter a search term');
        return;
    }


    const apiUrl = `https://api.weatherapi.com/v1/search.json?key=ba911215873245f4a10184739241506&q=${searchInput}`;
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayData(data) {
    var resultsContainer = document.getElementById('dataTable');
    resultsContainer.innerHTML = ''; // Clear previous results

    // Use a for loop to iterate over the data array
    for (let i = 0; i < data.length; i++) {
        const item = data[i];

        // Create HTML elements to display each item
        const resultElement = document.createElement('tr');
        resultElement.innerHTML = `
        <td>${item.name}</td>
        <td>${item.region}</td>
        <td>${item.country}</td>
        <td>${item.lat}</td>
        <td>${item.lon}</td>
      `;

        resultsContainer.appendChild(resultElement);
    }
}
// document.addEventListener('DOMContentLoaded', function () {
//     const dataTable = document.getElementById('dataTable');
//     const searchInput = document.getElementById('searchInput');
//     let data = []; // Array to store fetched data

//     // Fetch data from API
//     fetch(`https://api.weatherapi.com/v1/search.json?key=ba911215873245f4a10184739241506&${q = searchInput}`)
//         .then(response => response.json())
//         .then(json => {
//             data = json; // Store fetched data
//             renderTable(data); // Initial rendering of table
//         })
//         .catch(error => console.error('Error fetching data:', error));

//     // Function to render table
//     function renderTable(data) {
//         const tableBody = dataTable.querySelector('tbody');
//         tableBody.innerHTML = ''; // Clear existing table rows

//         data.forEach(item => {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//                 <td>${item.name}</td>
//                 <td>${item.region}</td>
//                 <td>${item.country}</td>
//                 <td>${item.lat}</td>
//                 <td>${item.lon}</td>


//             `;
//             tableBody.appendChild(row);
//         });
//     }

//     // Event listener for search input
//     searchInput.addEventListener('input', function () {
//         const searchString = searchInput.value.toLowerCase();
//         const filteredData = data.filter(item =>
//             item.name.toLowerCase().includes(searchString) ||
//             item.region.toLowerCase().includes(searchString) || item.country.toLowerCase().includes(searchString)
//         );
//         renderTable(filteredData); // Render filtered data
//     });
// });