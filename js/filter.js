const menupfolio = document.querySelector('.menu-pfolio'),
    items = document.querySelectorAll('.table_block')
    listitems = document.querySelectorAll('.navlink-pfolio')

function filter() {
    menupfolio.addEventListener('click', event => {
        event.preventDefault();
        const targetID = event.target.dataset.id 
        console.log(targetID)

        listitems.forEach(listitem => listitem.classList.remove('active'))

        switch (targetID) {
            case 'all':
                getItems('table_block')
                break
            case 'website':
                getItems(targetID)
                break
            case 'apps':
                getItems(targetID)
                break
            case 'design':
                getItems(targetID)
                break
            case 'market':
                getItems(targetID)
                break

        }
   }) 
}
filter()

function getItems(className) {
    items.forEach(item => {
                    if (item.classList.contains(className)) {
                        item.style.display = 'block'
                        
                    }
                    else {
                        item.style.display = 'none'
                    }
                })
}