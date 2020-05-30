var tableData = data;




dataDates = tableData.map(function(data) {
    return data.datetime;
});


var selectDate = [...new Set(dataDates)];


var dateList = d3.select("#dropdown-date");

selectDate.forEach(date => {
    var cell = dateList.append("option");
    cell.text(date);
});




var button = d3.select("#myForm");


button.on("click", function() {

    var inputElement = d3.select("#dropdown-date");
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(site => site.datetime === inputValue);

    console.log(filteredData);

    var tbody = d3.select("tbody");
    tbody.html("");

    filteredData.forEach(site => {

        var row = tbody.append("tr");


        Object.entries(site).forEach(([key, value]) => {
            console.log(key, value);


            var cell = row.append("td");

            cell.text(value);
        });
    });
});