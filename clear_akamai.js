/////////////////////////////////////////////////////////////////////////////////
//Automating akamai cache clearing for Stellantis websites (JavaScript)
//This is to be ran as a browser snippet while on any of stellantis web pages 

const siteURL = window.location.href

async function clearAkamai() {
    ///////////////////////////////////
    //The code that for window.open("place code here"); can be found in the confluence documentation and is meant for internal use only
    ///////////////////////////////////
    window.open();
    // I want to identify when a page is fully loaded before i reload the original page
    // I also want to clear local cache not just browser cache
    await sleep(7);
    
    // Clear local storage
    localStorage.clear();

    // Clear session storage
    sessionStorage.clear();

    // Perform a hard refresh on the current page
    location.reload(true);
    
    async function sleep(seconds){
    return new Promise((resolve)=>setTimeout(resolve, seconds * 1000));
}
};
    

clearAkamai();
