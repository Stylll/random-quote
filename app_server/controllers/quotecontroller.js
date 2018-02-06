/**
*Controller to handle quotes 
*Pulls random quote from the public api
*Parses it to a proper json format
*Sends it to the view for rendering
*/

var https = require('https');
var api_addr = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
var path = "/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

/**
*API data getter
*call api end point
*get the data and convert to proper json
*return the json
*/
var getRandomQuote = function(req,res){
  //build the request options
  var quote = {};
  
  //make the request using node http module
  
  https.get(api_addr, function(resp){
  var data = '';
 
  // A chunk of data has been recieved.
  resp.on('data', function(chunk){
    data += chunk;
  });
 
  // The whole response has been received. Print out the result.
  resp.on('end', function(){
    //console.log(JSON.parse(data));
    var result = JSON.parse(data);
    
    quote.title = "Random Quotes",
    quote.quote = {
      content:result[0].content,
      author:result[0].title
   };
    console.log("getting here 2");
    console.log(quote);
    
    res.render('random-quotes',quote);
  });
 
}).on("error", function(err){
  console.log("Error: " + err.message);
    quote.title = "Random Quotes",
    quote.quote = {
      content:"Design is to invent with intent. If you take away the ‘invent’ bit, you have an engineer. If you take away the ‘intent’ bit, you have an artist.",
      author:"Robert Goyn"
    }
    
    res.render('random-quotes',quote);
});
      
};

//GET request controller for random quote
module.exports.randomQuotes = function(req,res){
  
  //call helper function to get random quote
  getRandomQuote(req,res);
  
};






