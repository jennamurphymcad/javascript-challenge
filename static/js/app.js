// from data.js
var tableData = data;

// YOUR CODE HERE!

// select tbody html element
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");
var reset = d3.select('#reset-btn');

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runFilter);
form.on("submit", runFilter);
reset.on("click", runReset);


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
    var dateInputElement = d3.select("#datetime");
    var cityInputElement = d3.select("#cityFilter");
    var stateInputElement = d3.select("#stateFilter");
    var countryInputElement = d3.select("#countryFilter");
    var shapeInputElement = d3.select("#shapeFilter");
  
    // Get the value property of the input element
    var dateInputValue = dateInputElement.property("value");
    var cityInputValue = cityInputElement.property("value");
    var stateInputValue = stateInputElement.property("value");
    var countryInputValue = countryInputElement.property("value");
    var shapeInputValue = shapeInputElement.property("value");
// 
    // var dateFilteredData = tableData.filter(tableData => tableData.datetime === dateInputValue);
    // var cityFilteredData = tableData.filter(tableData => tableData.city === cityInputValue);
    // var stateInputData = tableData.filter(tableData => tableData.state === stateInputValue);
    // var countryInputData = tableData.filter(tableData => tableData.country === countryInputValue);
    // var shapeInputData = tableData.filter(tableData => tableData.shape === shapeInputValue);
    // if (dateInputValue !== 'null' || cityInputValue !=='null') {
        
    var filter = {
        datetime: dateInputValue,
        city: cityInputValue,
        state: stateInputValue,
        country: countryInputValue,
        shape: shapeInputValue,
    };

      ufos = tableData.filter(function(item) {
        for (var key in filter) {
            if (item[key] === undefined || item[key] != filter[key])
            return false;
        }
        return true;
        });


    console.log(ufos)
    //     var filteredData = tableData.filter(tableData => tableData.datetime === dateInputValue);

            
    //     if (dateInputValue !== 'null' && cityInputValue != 'null') {
    //              filteredData = tableData.filter((tableData => tableData.datetime === dateInputValue && tableData.city === cityInputValue)); 
    //         } else if (dateInputValue !== 'null' && cityInputValue === 'null') {
    //              filteredData = tableData.filter(tableData => tableData.datetime === dateInputValue);
    //         } else {
    //             filteredData = tableData.filter(tableData => tableData.city === cityInputValue);
    //         };
    // };
  
 
    tbody.html("");

    // populate table with filtered data for ufo-level-1 challenge
    ufos.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });


    //populate table with filtered data for ufo level-2 challenge
    // filteredData.forEach((ufoReport) => {
    //     var row = tbody.append("tr");
    //     Object.entries(ufoReport).forEach(([key, value]) => {
    //       var cell = row.append("td");
    //       cell.text(value);
    //     });
    //   });

    };

function runReset() {
    d3.event.preventDefault();
    tbody.html("");


    tableData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });      
};

//   if (score > 7) {
//     goodMovieScores.push(score);
//   }
//   // If the movie's rating is between 5 and 7, add it to the list of "Ok" movies
//   else if (score <= 7 && score > 5) {
//     okMovieScores.push(score);
//   }
//   // Otherwise, if the movie's rating is less than or equal to 5, add it to the list of bad movies
//   else {
//     badMovieScores.push(score);
//   }
// });


// var filter = {
//     address: 'England',
//     name: 'Mark'
//   };
//   var users = [{
//       name: 'John',
//       email: 'johnson@mail.com',
//       age: 25,
//       address: 'USA'
//     },
//     {
//       name: 'Tom',
//       email: 'tom@mail.com',
//       age: 35,
//       address: 'England'
//     },
//     {
//       name: 'Mark',
//       email: 'mark@mail.com',
//       age: 28,
//       address: 'England'
//     }
//   ];
  
  
//   users= users.filter(function(item) {
//     for (var key in filter) {
//       if (item[key] === undefined || item[key] != filter[key])
//         return false;
//     }
//     return true;
//   });
  
//   console.log(users)