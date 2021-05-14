const functions = require("firebase-functions");
const metascraper = require("metascraper")([
  require("metascraper-description")(),
  require("metascraper-image")(),
  require("metascraper-title")(),
]);
const got = require("got");

async function getMetaDataFromUrl(targetUrl){
  const { body: html, url } = await got(targetUrl);
  const metadata = await metascraper({ html, url });
  return metadata;
};

exports.getMetadata = functions.https.onCall(async (data, context) => {
    let url = decodeURIComponent(data.url);
    
    const metadata = await getMetaDataFromUrl(url);

  const results = {
    title: metadata.title,
    description: metadata.description,
    image: metadata.image,
    url: url
  };
  return(results);
});

