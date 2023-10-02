/*https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=xBkdKwg7skCeEaXCIMAW4Z0Ua3wmwfElo9k6RZxW  --> API*/



async function callApi(){
    const call = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=xBkdKwg7skCeEaXCIMAW4Z0Ua3wmwfElo9k6RZxW')
    const response = await call.json()
    return response
}

async function pintar(){
    const data = await callApi()
    console.log(data)
    const lista = data.photos
    console.log(lista)
    console.log(data.photos[0].img_src)
    let cards = ''

    lista.forEach(element => {
        console.log(element)
        let template = 
        `
            <div class="tarjeta">
                <p>${element.camera.full_name}</p>
                <img src="${element.img_src}" alt="nasa api img">
            </div>
        `
        cards += template
    });

    document.querySelector('.galeria').innerHTML = cards
    
}

pintar()

/*
for (let i = 0; i < 500; i++) {
        let template = 
        `
            <div class="tarjeta">
                <p>${data.photos[i].camera.full_name}</p>
                <img src="${data.photos[i].img_src}" alt="nasa api img">
            </div>
        `
        cards += template
    }
*/