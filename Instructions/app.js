// ** From 15.3>07-Ins_Github_Pages>Solved>JSplots.js
// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
d3.json("data/samples.json").then((importedData) => {
    console.log(importedData);
    var data = importedData;

    var names = Object.values(importedData.names);
    console.log(names);

    // /** from stackoverflow:  */
// /* https://stackoverflow.com/questions/9895082/javascript-populate-drop-down-list-with-array
    // Get dropdown element from DOM
    var dropdown = document.getElementById("selDataset");

// Loop through the array
    for (var i = 0; i < names.length; ++i) {
        // Append the element to the end of names list
        dropdown[dropdown.length] = new Option(names[i], names[i]);
    }

    // // ** From 15.2>07-Evr-Events-Review>Solved>script.js
    // // Use D3 to create an event handler
    d3.selectAll("body").on("change", updatePage);

    function updatePage() {
        // Use D3 to select the dropdown menu
        var dropdownMenu = d3.selectAll("#selDataset").node();
        // Assign the dropdown menu item ID to a variable
        var dropdownMenuID = dropdownMenu.id;
        // Assign the dropdown menu option to a variable
        var selDataset = dropdownMenu.value;

        console.log(dropdownMenuID);
        console.log(selDataset);
    }

});