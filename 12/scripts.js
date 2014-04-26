/**
 * @author Charles
 */
var tableURL = "https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1-MVrEbZ5fxoEIEBU9_CDM4iUVLK8cqU1T067n3ly+WHERE+DATE>=";
var myKey = "&key=AIzaSyALhD6XEx_Ge1QTHvfmlwy5e_9_p--vouY";

function mjsonLoaded(unemployment) {
	//Log Unemployment numbers to demonstrate jsonloaded is working
	console.log("loaded data");
	// Create Array to hold data, starting with "date" and "value"
	// headers

	var displayDataHeader = unemployment.columns;
	//console.log(displayDataHeader);

	//insert data table template from fusion tables
	//replace default data with unemployment.rows data

	var mtable = new google.visualization.DataTable();
	mtable.addColumn('string', displayDataHeader[0]);
	mtable.addColumn('number', displayDataHeader[1]);
	mtable.addRows(unemployment.rows);

	//add title
	var chartOptions = {

		title: "Post-war Unemployment"
	};


	//Create a table to add data from "table"
	//var munmpDataTable = google.visualization.arrayToDataTable(mtable);


	// Draw the linegraph in html div "graph div"

	var munmpGraph = new google.visualization.LineChart(document.getElementById("munmpGraphDiv"));
	munmpGraph.draw(mtable)



}//end of jsonLoaded function

//build googleLoaded function
//with Unemployment file imported
function buttonHandler(e){
	//console.log(e.target.id);
	
	var myID = e.target.id;
	var myYear = myID.split("_")[1];
	
	$("#chartTitle").html("Unemployment since "+myYear);
	
	$.get(tableURL+"'"+myYear+"-01-01'"+myKey, mjsonLoaded, "json");
	 History.pushState({year:myYear}, "Unemployment from "+myYear, "?year="+myYear); // logs {state:1}, "State 1", "?state=1"
}

function mchartLoaded() {
	//Console log to show that googleLoaded is working
	console.log("Google Loaded");

	console.log(History.getState());
	var urlData = History.getState().cleanUrl;
	var queryString = urlData.split("?");
	var defaultYear = "1990"
	
	if(queryString.length>1){	
		defaultYear = queryString[1].split("=")[1];
	console.log(queryString);
	

	}
	

$('.btn-success').on("click", buttonHandler);
	
	//Import Unemployment json file
	$("#year_"+defaultYear).click();
}//end chartLoaded function

function mpageLoaded() {

	//indicate page has loaded
	console.log("Page Loaded!");

	//Load chart from google and init. google loaded function
	google.load("visualization", "1", {
		packages : ["corechart"],
		callback : "mchartLoaded"


	});

}// end pageLoaded function

//load chart


// pageLoaded function
$(document).ready(mpageLoaded);