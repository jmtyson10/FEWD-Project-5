baguetteBox.run('.gallery');

const searchInput = document.querySelector('[data-search]')
let captions = document.getElementsByTagName('a')

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();

    for (i = 0; i< captions.length; i++) {
        if (!captions[i].innerHTML.toLowerCase().includes(value)) {
            captions[i].style.display="none";
        } else {
            captions[i].style.display="";
        }}
    })