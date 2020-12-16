// ** From 15.3>07-Ins_Github_Pages>Solved>JSplots.js
// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
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
    }

    // From 15.2>09-Stu-Event_Final (need a default plot)
    // Display the default plot
    // 940 is the default
    var defaultsample = samples.filter((person) => person.id === "940");
    console.log(defaultsample);

    var defaultsampvals = samples.map(sv => sv.sample_values);
    console.log("default sample_values");
    console.log(defaultsampvals);

    var defaultotuids = samples.map(otu => otu.otu_ids);
    console.log("default otu_ids");
    console.log(defaultotuids);

    var defaultotulabels = samples.map(otul => otul.otu_labels);
    console.log("default otu_labels");
    console.log(defaultotulabels);

    // Sort the data by sample_values (from 15.2>06 activity)
    var sorteddefaultsampvals = defaultsampvals.sort((a,b) => b.sample_values - a.sample_values);

    // Slice the first 10 objects for plotting
    sliceddefaultsampvals = sorteddefaultsampvals.slice(0, 10);
    console.log("slicedefaultsampvals");
    console.log(sliceddefaultsampvals);

    // Reverse the array to accommodate Plotly's defaults
    reversedsliceddefaultsampvals = sliceddefaultsampvals.reverse();
    console.log("reversedliceddefaultsampvals");
    console.log(reversedsliceddefaultsampvals);

    var data = [{
    x: reversedsliceddefaultsampvals,
    y: defaultotuids,
    type: "horizontalBar"
    }];

    var layout = {
    title: "Bar Chart",
    xaxis: {title: "Count"},
    height: 600,
    width: 800
    };

    Plotly.newPlot("bar", data, layout);
    

    
    // // ** From 15.2>07-Evr-Events-Review>Solved>script.js
    // // Use D3 to create an event handler
    d3.selectAll("body").on("change", updatePage);

    function updatePage() {
        // Use D3 to select the dropdown menu
        var dropdownMenu = d3.selectAll("#selDataset").node();
        // Assign the dropdown menu item ID to a variable
        var dropdownMenuID = dropdownMenu.Id;
        // Assign the dropdown menu option to a variable
        var selDataset = dropdownMenu.value;

        // from 14.3>09-Par_Form_Filter:
          // Select the input element and get the raw HTML node
        var inputElement = d3.select("#selDataset");

        // Get the value property of the input element
        var inputValue = inputElement.property("value");

        console.log(dropdownMenuID);
        console.log(selDataset);

        // from 14.3>09
        console.log("filtered selection, use inputValue");
        console.log(inputValue);
        // console.log(data);

        // data to build table for demographic: (metadata)
        // display the data for the chart in console
        var filterednamesData = metadata.filter((meta) => meta.id === +inputValue);
        // here is the data for the filter selection.
        console.log("Metadata for filter selection");
        console.log(filterednamesData);

        // display the data for the chart in console
        var filteredsamplesData = samples.filter((person) => person.id === inputValue);
        // here is the data for the filter selection.
        console.log("Sample Data for filter selection");
        console.log(filteredsamplesData);
        
        var idmetaFilter = filteredsamplesData.map(m => m.id);
        var ethnicitymetaFilter = filteredsamplesData.map(m => m.ethnicity);
        var idmetaFilter = filteredsamplesData.map(m => m.id);
        var idmetaFilter = filteredsamplesData.map(m => m.id);
        var idmetaFilter = filteredsamplesData.map(m => m.id);
        var idmetaFilter = filteredsamplesData.map(m => m.id);
        var idmetaFilter = filteredsamplesData.map(m => m.id);

        console.log("meta id");
        console.log(idmetaFilter);

        console.log("meta ethnicity");
        console.log(ethnicitymetaFilter);

    };


});