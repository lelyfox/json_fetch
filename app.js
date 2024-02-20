let items = document.querySelector('.items')

async function getItem(){
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=21')
        let data = await res.json()
        
        data.forEach(el => {
            let item = document.createElement('div')
            item.classList.add('item')

            let title = document.createElement('p')
            let img = document.createElement('img')
            let text = document.createElement('p')
            
            title.textContent = `ID: ${el.id}`
            title.style.fontSize = '15px'
            img.src = el.url
            text.textContent = `Описание: ${el.title}`
            text.style.fontWeight = '700'
            text.style.fontSize = '20px'

            item.append(title, img, text)
            items.append(item)
        });
    } catch (error) {
        console.log(error);
    }
}

getItem()