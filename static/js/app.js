// from data.js
var tableData = data;

// YOUR CODE HERE!

// select tbody html element
var tbody = d3.select("tbody");

// Select the Filter and Rest button
var button = d3.select("#filter-btn");
var reset = d3.select('#reset-btn');

// Select the form
var form = d3.select("#form");

// Select the input element and get the raw HTML node
var dateInputElement = d3.select("#datetime");
var cityInputElement = d3.select("#cityFilter");
var stateInputElement = d3.select("#stateFilter");
var countryInputElement = d3.select("#countryFilter");
var shapeInputElement = d3.select("#shapeFilter");

// Set input value variables to blank as default
var dateInputValue = "";
var cityInputValue = "";
var stateInputValue = "";
var countryInputValue = "";
var shapeInputValue = "";

// Create event handlers 
button.on("click", runFilter);
// form.on("submit", runFilter);
reset.on("click", runReset);

// Append all the UFO data to the html table when page is loaded as default
tableData.forEach((ufoReport) => {
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});


// ** Start Filter Function ** //
function runFilter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Get the value property of the input element
    dateInputValue = dateInputElement.property("value");
    cityInputValue = cityInputElement.property("value");
    stateInputValue = stateInputElement.property("value");
    countryInputValue = countryInputElement.property("value");
    shapeInputValue = shapeInputElement.property("value");
    
    // empty filter object
    var filter = {};

    // add key: value pairs to empty filter object if not blank
    if (dateInputValue !== "") {
        filter.datetime = dateInputValue;
    } 

    if (cityInputValue !== "") {
        filter.city = cityInputValue;
    }

    if (stateInputValue !== "") {
        filter.state = stateInputValue;
    }

    if (countryInputValue !== "") {
        filter.country = countryInputValue;
    }

    if (shapeInputValue !== "") {
        filter.shape = shapeInputValue;
    }

    // check filter object make sure things keys and values are being added
    console.log(filter);

    // Filter data based on key: value pairs in filter object
    filteredTableData = tableData.filter(function(item) {
        for (var key in filter) {
            if (item[key] === undefined || item[key] != filter[key])
            return false;
        }
            return true;
    });

    // clear existing rows
    tbody.html("");

    // populate table with filtered data rows
    filteredTableData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
    };
// ** End RunFilter Function ** //


// ** Reset Function ** //
// When user clicks reset button it shows all UFO data and clears input fields 
function runReset() {
    d3.event.preventDefault();
    tbody.html("");
    d3.select("#stockInput").property('value', '');;
    d3.select("#datetime").property('value', '');;
    d3.select("#cityFilter").property('value', '');;
    d3.select("#stateFilter").property('value', '');;
    d3.select("#countryFilter").property('value', '');;
    d3.select("#shapeFilter").property('value', '');;

    tableData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });      
    };
// ** End Reset Function ** //
