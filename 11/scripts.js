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

function mjsonLoaded(unemployment) {
	//Log Unemployment numbers to demonstrate jsonloaded is working
	console.log(unemployment);
	// Create Array to hold data, starting with "date" and "value"
	// headers

	var mtable = google.visualization.DataTable();
	//insert data table template from fusion tables
	//replace default data with unemployment.rows data
	
	   
	mtable.addColumn('string', unemployment.columns[0]);
	mtable.addColumn('number', unemployment.columns[1]);
	mtable.addRows(unemployment.rows);                
	
	var chartOptions = {
		title: "Unemployment since 1980",
		width:600,
		height:400
		
};	

var munmpGraph = new google.visualization.LineChart(document.getElementById("munmpGraphDiv"));
	munmpGraph.draw(mtable, chartOptions);
	
}

function mchartLoaded() {
	//Console log to show that googleLoaded is working
	console.log("Google Loaded");
	//$('.btn-success').on("click" showNewData);
	//Import Unemployment json file
	$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1f5wTbwjh7pbobwOgv48U_MCXPW9f-Gu-BiZfXsRb+WHERE+DATE>='1979-12-01'&key=AIzaSyALhD6XEx_Ge1QTHvfmlwy5e_9_p--vouY", mjsonLoaded, "json");
}//end chartLoaded function

function pageLoaded(){

	//indicate page has loaded
	console.log("Page Loaded!");

	//Load chart from google and init. google loaded function
	google.load("visualization", "1", {
		packages : ["corechart"],
		callback : "mchartLoaded"


// pageLoaded function
$(document).ready(pageLoaded);
//make sure html is pulling scripts from fusion table
//console.log("javascript working");

//create function with unemployment
//data under local name "Unemployment"
//var tableURL = "https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1f5wTbwjh7pbobwOgv48U_MCXPW9f-Gu-BiZfXsRb+WHERE+DATE>=";
//var myKey = "&key=AIzaSyALhD6XEx_Ge1QTHvfmlwy5e_9_p--vouY"

/*function showNewData(e){
	//e is click event. i will use it's target to id div
	var myID= e.target.id;
	var myNameArray = myID.split("_");//splits it into an array, "2000" will be second item
	var myYear = myNameArray[1]; //grab year
	
	$.get(myTableURL+"'"+"-01-01'"+myKey, dataLoaded, "json)");
	



	//Create a table to add data from "table"
	//var munmpDataTable = google.visualization.arrayToDataTable(mtable);


	// Draw the linegraph in html div "graph div"

	

	

};//end of jsonLoaded function

	
//build googleLoaded function
//with Unemployment file imported

