/**
 * @author Peterphobia
 */
	
		//The purpose of this program is to sort my records. I want to pick out
		//all of the Beatles records.
		
		//First, I'll need to list my records.
		var myRecords = [
		
			{"name" : "Sgt. Pepper",
			"artist" : "Beatles"
		}, {"name" : "Sticky Fingers",
			"artist" : "Rolling Stones"
		}, {"name" : "A Love Supreme",
			"artist" : "John Coltrane"
		}, {"name" : "Abbey Road",
			"artist" : "Beatles"
		},	{"name" : "Blood on the Tracks",
			"artist" : "Bob Dylan"
		},	{"name" : "Help!",
			"artist" : "Beatles",
		},	{"name" : "Thriller",
			"artist" : "Michael Jackson"
			}];//End of Records list 	
			
			//console.log(myRecords)
			
			//These are the lists for my records
			var beatlesRecords = [];
			var otherRecords = [];
			
			//Now make a loop to check each record. Beatles records will go in the beatlesRecords list, the 
			//rest will go in otherRecords
			
			for(var i=0; i<myRecords.length; i++){
				//console.log(i)
				
				//For every record, check artist
				//For Beatles put in beatlesRecords
				//For the rest put in otherRecords
				
				var currentRecord = myRecords[i]
				console.log(currentRecord);
				
				if(currentRecord.artist == "Beatles"){
					console.log(currentRecord);
					//because the artist is Beatls put it in beatlesRecords
					beatlesRecords.push(currentRecord); 
				}else{
					//otherwise put it in otherRecords
					otherRecords.push(currentRecord);
				}//end of if/else statement
				}//end of loop 
				console.log("These are my records")
				console.log("Beatles Records:")
				console.log(beatlesRecords)
				//only Beatles Records should appear in this list
				console.log("My Other Records:")	
				console.log(otherRecords)	
				//The rest of my records are listed now	

