console.log("Loaded extension");


function blockRequest(details) {
   return {cancel: true};
}

function updateFilters(urls) {
   console.log(chrome.webRequest)
    if(chrome.webRequest.onBeforeRequest.hasListener(blockRequest))
     chrome.webRequest.onBeforeRequest.removeListener(blockRequest);
     chrome.webRequest.onBeforeRequest.addListener(blockRequest, {urls: ["*://*.youtube.com/*", "*://*.youtube.net/*"]}, ['blocking']);
}

updateFilters();
console.log(updateFilters())

console.log('Hey')
 