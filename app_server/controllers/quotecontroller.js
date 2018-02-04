/**
*Controller to handle quotes 
*Pulls random quote from the public api
*Parses it to a proper json format
*Sends it to the view for rendering
*/

var request = require('request');
const api_addr = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
/**
*API data getter
*call api end point
*get the data and convert to proper json
*return the json
*/
var getRandomQuote = function(req,res){
  var data = {
    title:"Random Quotes",
    quote:{
      content:"Design is to invent with intent. If you take away the ‘invent’ bit, you have an engineer. If you take away the ‘intent’ bit, you have an artist.",
      author:"Robert Goyn"
    }
  };
  
  return data;
  
};

//GET request controller for random quote
module.exports.randomQuotes = function(req,res){
  
  res.render('random-quotes',getRandomQuote(req,res));
};






