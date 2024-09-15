/* Theory:

fetch(): The fetch() method of the Window interface starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available. 

fetch(url) returns a promise (like in .json format) if networking searching is done ,  otherwise give error (HTTP: Error)
The returned promise can be used to determine either the data use / fetch execution is completed or not

A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. 
A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.).
 Instead, a then() handler must check the Response.ok and/or Response.status properties.



 Example with Real Life Non-Coding Incident-

 Suppose we want to install Battleground Mobile India
 We go to www.playstore.com

 Case 1: I can't go to www.playstore.com ( May be networking issue or invalid website)
 Case 2: I entered the website 

 Case 2.1:  Game Available ( let's install )
 Case 2.2   Game is not available, cannot do anything



 Same Scenerio With fetch

 Check if the URL is responsing or not

 Case 1:  Not Responsing HTTP Error , throw first rejection for networking error 
 Case 2:  Responsing 200- OK    404- Networking Error   500- Insernal Server Error   , throw resolved (acceptance)

 Case 2.1 response.ok ( 200-299)    start fetching.....  resolved ( further fetched data can be accessed)
 Case 2.2 !response.ok ( >300)       fetching failed.... reject

*/

fetch('www.getImage.com')                                                                     // Trying to collect Data from www.getImage.com
  .then(response => {

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);                              // DATA NOT FOUND , 404 ERROR
    }

    return response.json();                                                                   // Parse the JSON (PROMISE) if the response is ok
  })

  .then(data => {                                                                            //json is trying to give response
    console.log(data); // Handle the data                                                    // json gives , resolved
  })

  .catch(error => {                                                                          // json gives , rejected
    console.error('There was a problem with the fetch operation:', error); // Handle the error
  });
