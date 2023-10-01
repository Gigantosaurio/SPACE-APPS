/*https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=xBkdKwg7skCeEaXCIMAW4Z0Ua3wmwfElo9k6RZxW  --> API*/



async function callApi(){
    const call = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=xBkdKwg7skCeEaXCIMAW4Z0Ua3wmwfElo9k6RZxW')
    const response = await call.json()
    return response
}

async function pintar(){
    const data = await callApi()
    console.log(data)
    const array = data.photos
    let cards = ''
    for (let i = 0; i < 20; i++) {
        let template = 
        `
            <div class="tarjeta">
                <p>${data.photos[i].camera.full_name}</p>
                <img src="${data.photos[i].img_src}" alt="nasa api img">
            </div>
        `
        cards += template
    }

    document.querySelector('.galeria').innerHTML = cards
    
}

pintar()