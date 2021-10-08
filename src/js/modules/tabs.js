function tabs(){
    // Tabs
    let     menuBlock = document.querySelector('.tabheader__items'),
            menu = document.querySelectorAll('.tabheader__item'),
            tabs = document.querySelectorAll('.tabcontent');


    menuBlock.addEventListener('click', (event) => {
        let link = event.target;

        if (link && link.classList.contains("tabheader__item")) {
            menu.forEach((menuLink, number) => {
                if (menuLink == link) {
                    removeClass(menu);
                    removeClass(tabs);
                    link.classList.add('tabheader__item_active', 'fade');
                    tabs[number].classList.add('tabcontent_active', 'fade');
                }
            });  
        }
    });
 
    function removeClass (arr){
        arr.forEach((item) => {
            item.classList.remove('tabcontent_active', 'fade');
            item.classList.remove('tabheader__item_active', 'fade');
        });
    }
}

export default tabs;