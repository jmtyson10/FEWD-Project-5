    const search = document.getElementById('search');
    
    search.addEventListener('keyup', e =>{
        let value = e.target.value.toLowerCase();
        let cards = document.querySelectorAll('[data-caption]');
    
    cards.forEach(card => {
        const caption = card.getAttribute('data-caption').toLowerCase();
        if(caption.includes(value)){
            card.style.display = 'block';
        }else {
            card.style.display = 'none';
        }
    })
  })