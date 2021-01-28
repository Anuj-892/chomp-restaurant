// Tab menu

// openMenu function
function openMenu(evt, item) {
    
    event.preventDefault();

    //   add display none to all menus
    const menu = document.getElementsByClassName('items-grid');
    for(let i = 0; i<menu.length; i++) {
    menu[i].style.display='none';
    }
 
    // remove 'active' class from all optionBtn
    const optionBtn = document.getElementsByClassName('option');

    for(let i = 0; i< optionBtn.length; i++) {
        optionBtn[i].className = optionBtn[i].className.replace('active', ' ');
     }

    //  Show current tab and add active class to btn that opened it
    evt.currentTarget.className+=' active';  
    document.getElementById(item).style.display = 'grid';
   
    // Adding to cart  btn interaction
    const addBtn = document.getElementsByClassName('add');
    for(let i = 0; i< addBtn.length; i++) {
        addBtn[i].addEventListener('click', (event) => {
            event.preventDefault();
            addBtn[i].innerHTML='Adding to cart...';
            setTimeout(() => {
               addBtn[i].innerHTML='Add To Cart';
            }, 2000);
        });
    }
    
}

document.getElementById('default').click();