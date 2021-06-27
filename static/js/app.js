// from data.js
var tableData = data;

// YOUR CODE HERE!

// select tbody html element
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runFilter);
form.on("submit", runFilter);


// Append all the UFO data to the html table when page is loaded
tableData.forEach((ufoReport) => {
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Complete the event handler function for the form
function runFilter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    // console.log(people);
  
    var dateFilteredData = tableData.filter(tableData => tableData.datetime === inputValue);
  
    // remove all rows from table
    tbody.html("");

    //populate table with filtered data
    dateFilteredData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
  };

  var shapeData = tableData.filter(tableData => tableData.shape);
console.log(shapeData);