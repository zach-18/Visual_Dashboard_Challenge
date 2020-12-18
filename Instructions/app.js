// *** On Wednesday 12/16 I met w/ my Tutor.  We made several structural changes to my code.  
// The use of functions has been changed to make the flow of code much easier to follow.

function updateTable(sample_id) {
    d3.json("data/samples.json").then((data) => {
        var samples = data.samples
        var defaultsample = samples.filter((person) => person.id === sample_id);

        var result = defaultsample[0];

        var otuIds = result.otu_ids;
        var otuLabels = result.otu_labels;
        var sampleValues = result.sample_values;

        var yticks = otuIds.slice(0,10).map(otuID => `OTU ${otuID}`).reverse();
        var barData = [
            {
                y: yticks,
                x: sampleValues.slice(0,10).reverse(),
                text: otuLabels.slice(0,10).reverse(),
                type: "bar",
                orientation: "h"
            }
        ];

        var layout = {
            title: "Bar Chart",
            xaxis: { title: "Count" },
            height: 400,
            width: 600
        };

        Plotly.newPlot("bar", barData, layout);

        var bubbleData = [
            {
                x: otuIds,
                y: sampleValues,
                text: otuLabels,
                mode: "markers",
                marker: {
                    size: sampleValues,
                    color: otuIds,
                    colorscale: "Earth"
                }
            }
        ]

        var bubbleLayout = {
            title: "Bacteria",
            xaxis: { title: "OTU ID"},
            height: 400,
            width: 600
        };
        Plotly.newPlot("bubble", bubbleData, bubbleLayout);




    })

};
init();
updateTable("940");

// ** From 15.3>07-Ins_Github_Pages>Solved>JSplots.js
// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
function init() {
    d3.json("data/samples.json").then((importedData) => {
        console.log(importedData);
        var data = importedData;

        var names = Object.values(importedData.names);
        console.log("Names");
        console.log(names);

        var metadata = Object.values(importedData.metadata);
        console.log("metadata");
        console.log(metadata);

        var samples = Object.values(importedData.samples);
        console.log("samples");
        console.log(samples);

        // /** from stackoverflow:  */ (To add names to dropdown)
        // /* https://stackoverflow.com/questions/9895082/javascript-populate-drop-down-list-with-array
        // Get dropdown element from DOM
        var dropdown = document.getElementById("selDataset");

        // Loop through the array
        for (var i = 0; i < names.length; ++i) {
            // Append the element to the end of names list
            dropdown[dropdown.length] = new Option(names[i], names[i]);
        };


    }
    )
};

function optionChanged(newSample) {
    updateTable(newSample);
    // buildMetadata(newSample);
}



// // ** From 15.2>07-Evr-Events-Review>Solved>script.js
// // Use D3 to create an event handler
// d3.selectAll("body").on("change", updatePage);

// function updatePage() {
//     // Use D3 to select the dropdown menu
//     var dropdownMenu = d3.selectAll("#selDataset").node();
//     // Assign the dropdown menu item ID to a variable
//     var dropdownMenuID = dropdownMenu.Id;
//     // Assign the dropdown menu option to a variable
//     var selDataset = dropdownMenu.value;

//     // from 14.3>09-Par_Form_Filter:
//     // Select the input element and get the raw HTML node
//     var inputElement = d3.select("#selDataset");

//     // Get the value property of the input element
//     var inputValue = inputElement.property("value");

//     console.log(dropdownMenuID);
//     console.log(selDataset);

//     // from 14.3>09
//     console.log("filtered selection, use inputValue");
//     console.log(inputValue);
//     // console.log(data);

//     // data to build table for demographic: (metadata)
//     // display the data for the chart in console
//     var filterednamesData = metadata.filter((meta) => meta.id === +inputValue);
//     // here is the data for the filter selection.
//     console.log("Metadata for filter selection");
//     console.log(filterednamesData);

//     // display the data for the chart in console
//     var filteredsamplesData = samples.filter((person) => person.id === inputValue);
//     // here is the data for the filter selection.
//     console.log("Sample Data for filter selection");
//     console.log(filteredsamplesData);

//     var idmetaFilter = filteredsamplesData.map(m => m.id);
//     var ethnicitymetaFilter = filteredsamplesData.map(m => m.ethnicity);


//     console.log("meta id");
//     console.log(idmetaFilter);

//     console.log("meta ethnicity");
//     console.log(ethnicitymetaFilter);

// };
