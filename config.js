// config.js (or common.js)
function checkApiKey() {
    let storedApiKey = localStorage.getItem("apiKey");
    if (!storedApiKey) {
        // If no API key, redirect to the page where it can be entered.
        window.location.href = "enter-api-key.html";
        // It's important to return null here, or even better, stop further execution
        // in the calling script. However, if window.location.href is called,
        // the current script execution will typically stop anyway as the page changes.
        return null;
    }
    return storedApiKey;
}

let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
// Execute the check and store the result globally
let apiKey = checkApiKey();