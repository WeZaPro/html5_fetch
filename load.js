document.querySelector("button").addEventListener(
  "click",
  function () {
    // fetch("https://jsonplaceholder.typicode.com/users/2")
    //
    // fetch("https://jsonplaceholder.typicode.com/users/2")
    //   .then((response) => {
    //     console.log("res--> ", response);
    //     return response.json();
    //   })
    //   .then((myContent) => {
    //     // myImage.src = myContent["message"];
    //     console.log("myContent--> ", myContent);
    //   });
    //
    // fetch("https://99cd-223-204-233-232.ngrok-free.app/users/2", {
    //   method: "HEAD",
    //   mode: "no-cors",
    //   // credentials: "include",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "GET, POST",
    //     "Access-Control-Allow-Headers": "Content-Type",
    //   },
    //   body: JSON.stringify({ name: "Alice", age: 25 }),
    // });
    //
    // const testURL = "https://e111-223-204-233-232.ngrok-free.app/users";
    // //const testURL = "https://jsonplaceholder.typicode.com/users/2";
    // const myInit = {
    //   method: "HEAD",
    //   mode: "no-cors",
    // };
    // const myRequest = new Request(testURL, myInit);
    // fetch(testURL)
    //   .then(function (responseB) {
    //     console.log("responseB--> ", responseB);
    //     return responseB;
    //   })
    //   .then(function (responseA) {
    //     console.log("responseA--> ", responseA);
    //   })
    //   .catch(function (e) {
    //     console.log(e);
    //   });

    // Send a POST request with JSON data to https://example.com/api
    var url = "https://e111-223-204-233-232.ngrok-free.app/users";
    fetch(url)
      .then(function (response) {
        // The API call was successful!
        console.log("response--> ", response);
        return response.json();
      })
      .then(function (data) {
        // This is the JSON from our response
        console.log("data--> ", data);
      })
      .catch(function (err) {
        // There was an error
        console.warn("Something went wrong.", err);
      });
  },
  false
);
