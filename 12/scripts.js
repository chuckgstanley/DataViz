/**
 * @author Charles
 */

/* Init. pageLoaded function on document ready
 * pageLoaded loads google Viz data inits. vizLoaded
 * set up bootstrap button to click handler
 * build click handler
 * get fusion table url, parsed with tableID; year value; and key set up as independent variable init mjsonLoaded
 * make variables with tableID and google key
 * import unemployment columns and rows
 * draw graph and send to unemployment graph div
 * 
 */
var tableID = "https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1-MVrEbZ5fxoEIEBU9_CDM4iUVLK8cqU1T067n3ly+WHERE+DATE>=";
var googleKey = "&key=AIzaSyALhD6XEx_Ge1QTHvfmlwy5e_9_p--vouY";

function unemploymentLoaded(unemployment) {
	//Log Unemployment numbers to demonstrate jsonloaded is working
	console.log("loaded data");
	// Create Array to hold data, starting with "date" and "value"
	// headers

	var displayDataHeader = unemployment.columns;
	//console.log(displayDataHeader);

	//insert data table template from fusion tables
	//replace default data with unemployment.rows data

	var table = new google.visualization.DataTable();
	table.addColumn('string', displayDataHeader[0]);
	table.addColumn('number', displayDataHeader[1]);
	table.addRows(unemployment.rows);


	// Draw the linegraph in html div "graph div"

	var unmpGraph = new google.visualization.LineChart(document.getElementById("unmpGraphDiv"));
	unmpGraph.draw(table)



}//end of unemploymentLoaded function

//build googleLoaded function
//with Unemployment file imported
function clickHandler(e){
	//console.log(e.target.id);

	//button recalls button Id 
	var myID = e.target.id;
	//isolated year from button id
	var yearVlu = myID.split("_")[1];

	//append year to "Unemployment since..." send to chart title 
	$("#chartTitle").html("Unemployment since "+yearVlu);

	//build query string from table ID; variable year; and key; init. unemploymentLoaded
	$.get(tableID+"'"+yearVlu+"-01-01'"+googleKey, unemploymentLoaded, "json");
	//Assign button states to url
	 History.pushState({year:yearVlu}, "Unemployment from "+yearVlu, "?year="+yearVlu); // logs {state:1}, "State 1", "?state=1"
}//end click handler function

function vizLoaded() {
	//Console log to show that googleLoaded is working
	console.log("Google Loaded");

	console.log(History.getState());
	//Fix saved button state to set URLs 
	var appendUrl = History.getState().cleanUrl;
	//split URL at ?
	var urlYear = appendUrl.split("?");
	//default year is 1990
	var dfltYear = "1990"
	//if url from button event is there, save url
	if(urlYear.length>1){	
		dfltYear = urlYear[1].split("=")[1];
	console.log(urlYear);


	}

//activate click handler on "click"
$('.btn-success').on("click", clickHandler);

	//add year value to #year on "click"
	$("#year_"+dfltYear).click();
}//end vizLoaded function

function pageLoaded() {

	//indicate page has loaded
	console.log("Page Loaded!");

	//Load chart from google and init. vizLoaded function
	google.load("visualization", "1", {
		packages : ["corechart"],
		callback : "vizLoaded"


	});

}// end pageLoaded function


$(document).ready(pageLoaded);