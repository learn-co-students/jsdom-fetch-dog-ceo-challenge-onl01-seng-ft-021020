    fetch("string representing a URL to a data source")
      /*
        The function above returns an object that represents what the data source
        sent back. It does *not* return the actual content.
        We have to call the then() method on the object that comes back. then()
        takes as its argument a function that receives the response as its argument.
        Inside of the function, we do whatever processing we need, but at the end we
        *have to return* the content that we've gotten out of the response.
        The response has some basic functions on it for the most common data types.
        The most important ones are .json() and .text().
        This callback function is usually only one line: returning the content from
        the response. What we return from this function will be used in the _next_
        then() function.
      */
     
      .then(function(response) {
        return response.json();
      })
     
      /*
        The function above returns the content from the response.
        We can use that content inside of the callback function that's
        passed in to the then() function below.
      */
     
      .then(function(json){
        // Use this data inside of `json` to do DOM manipulation
      })