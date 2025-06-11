function checkApiKey() {
    if(!localStorage.getItem("apiKey")) {
        window.open("enter-api-key.html", "_self");
        return null; // Return null if no API key found
    }
    return localStorage.getItem("apiKey");
}

let rootpath = "https://mysite.itvarsity.org/api/ContactBook/";
let apiKey = checkApiKey();