baguetteBox.run('.gallery');

let search = document.querySelector('input');
let dataCaption = document.getElementsByTagName('a');


search.addEventListener("input", e => {
    const value = e.target.value.toUpperCase();

    for (i = 0; i< dataCaption.length; i +=1 ) {
        if (!dataCaption[i].innerHTML.toUpperCase().includes(value)) {
            dataCaption[i].style.display="none";
        } else {
            dataCaption[i].style.display="";
        }}
    })
