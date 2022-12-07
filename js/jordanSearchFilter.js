// This is a general functioning search bar. It's styled with _searchBar.scss

// Declare variables
let search = document.querySelector(['data-search']);
let dataCaption = document.getElementsByTagName('a');

// envoke an event listener
// e => is the event handling function
search.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();

    for (i = 0; i< captions.length; i++) {
        if (!dataCaption[i].innerHTML.toLowerCase().includes(value)) {
            dataCaption[i].style.display="none";
        } else {
            dataCaption[i].style.display="";
        }}
    })