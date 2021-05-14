const test = require("firebase-functions-test")(
  {
    databaseURL: "https://metadata.firebaseio.com",
    storageBucket: "metadata.appspot.com",
    projectId: "my-metadata",
  },
  "metadata-11c50-firebase-adminsdk-ysxf3-f974d4eb7b.json"
);
test.mockConfig({ stripe: { key: "23wr42ewr34" } });
const myFunctions = require("./index.js");

const wrapped = test.wrap(myFunctions.getMetadata);
const metadata = wrapped({
  url:
    "https://www.cnn.com/2021/04/29/india/india-covid-crisis-world-problem/index.html",
});

(async () => {
  await metadata.then((m) => {
    for (const [key, value] of Object.entries(m)) {
      console.log(`${key} ${value}`);
    }
  });
  console.log("Done");
})();
