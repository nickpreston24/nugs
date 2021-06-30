<template>
  <div>
    <h1>Add a Round</h1>

    <p>test</p>
  </div>
</template>

<script>
export default {
  mounted() {
    // this.getStuff();
    // this.postData("https://example.com/answer", { answer: 42 }).then((data) => {
    //   console.log(data); // JSON data parsed by `data.json()` call
    // });
    // this.getData("https://example.com").then((data) => {
    //   console.log(data); // JSON data parsed by `data.json()` call
    // });
  },
  methods: {
    async getData(url = "") {
      const response = await fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      });
      console.log(`response`, response);
      return !response.body ? {} : response.json(); // parses JSON response into native JavaScript objects

      //   fetch("http://google.com")
      //     .then((response) => response.json())
      //     .then((data) => console.log(data));
      //   fetch("https://www.underwoodammo.com/handgun-ammo", null).then(
      //     (response) => {
      //       console.log(`response`, response);
      //     }
      //   );
    },

    // Example POST method implementation:
    async postData(url = "", data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    },
  },
};
</script>