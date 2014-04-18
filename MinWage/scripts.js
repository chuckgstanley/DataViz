/**
 * @author Peterphobia
 *///
 
 //Using previous template to pull json data
//from unemployment doc, 
//create a program that will pull the numbers
//from a fusion table:

//1. Open Scripts and HTML from last week
//2. Create Fusion Table from Unemployment Data
//3. Insert Fusion Table URL into Get function
//4. Comment out loop function, to disable
//5. Log console, to show that fusion data
// is displayed in console
//6. Use google fusion template to create new table
//7. Create line graph from table


//make sure html is pulling scripts from fusion table
//console.log("javascript working");

//create function with unemployment
//data under local name "Unemployment"

function jsonLoaded(wageData) {
	//Log Unemployment numbers to demonstrate jsonloaded is working
	console.log(wageData);
	// Create Array to hold data, starting with "date" and "value"
	// headers

	var displayDataHeader = wageData.columns;
	console.log(displayDataHeader);
	
	//insert data table template from fusion tables
	//replace default data with unemployment.rows data
	
	var table = new google.visualization.DataTable();
	table.addColumn('string', displayDataHeader[0]);
	table.addColumn('number', displayDataHeader[1]);
	/*table.addColumn('number', displayDataHeader[2]);
	table.addColumn('number', displayDataHeader[3]);
	table.addColumn('number', displayDataHeader[4]);
	table.addColumn('number', displayDataHeader[5]);
	table.addColumn('number', displayDataHeader[6]);
	*/table.addColumn('number', displayDataHeader[7]);
	table.addRows(wageData.rows);
	
	
	
	
	
	};


	//Create a table to add data from "table"
	//var wageDataTable = google.visualization.arrayToDataTable(table);


	// Draw the linegraph in html div "graph div"

	var wageGraph = new google.visualization.LineChart(document.getElementById("wageGraphDiv"));{
	wageGraph.draw(table)

	

};//end of jsonLoaded function

//build googleLoaded function
//with Unemployment file imported

function chartLoaded() {
	//Console log to show that googleLoaded is working
	console.log("Google Loaded");

	//Import Unemployment json file
	$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+10Oojpv5IURYfrhSXL-A1qwgWSbVjHKqni0NwaCch&key=AIzaSyALhD6XEx_Ge1QTHvfmlwy5e_9_p--vouY", jsonLoaded, "json");
}//end chartLoaded function

function pageLoaded() {

	//indicate page has loaded
	console.log("Page Loaded!");

	//Load chart from google and init. google loaded function
	google.load("visualization", "1", {
			packages : ["corechart"],
			callback : "chartLoaded"


		});

}



$(document).ready(pageLoaded);