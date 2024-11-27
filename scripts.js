function vaihdakuva() {
    const pixabayapikey = "47313001-9435ff70be6231c7a6c6f19de"; //https://pixabay.com/api/
    const hakutermi = document.getElementById("hakutermi").value;
    const kuvakontti = document.getElementById("montakuvaa");
    const kuvamaara = document.getElementById("maara").value;
    const apilinkki = `https://pixabay.com/api/?key=${pixabayapikey}&q=${hakutermi}&image_type=photo`;

    kuvakontti.innerHTML = "";
    console.log(apilinkki);

    fetch(apilinkki)
        .then(response => response.json())
        .then(data => {
            if(data.hits.length > 0) {
                for(let i = 0; i < kuvamaara; i++) {
                    const img = document.createElement("img");
                    img.src = data.hits[i].webformatURL;
                    kuvakontti.appendChild(img);
                    img.alt = hakutermi;
    
                    //document.getElementById("vaihtuvakuva").src = data.hits[i].webformatURL;
                }
            }
            else {
                console.error("ei kuvia");
            }
        })
        .catch(error => console.error("virhe haussa", error));
}