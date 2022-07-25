const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5dbfc8356emshb854100393161b3p1f6fdcjsn00b5b28c25d8',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
};

let artistPpDOM = document.querySelector("#artistPP")
let artistFLDOM = document.querySelector("#artistFL")
let artistCityDOM = document.querySelector("#artistCity")
let artistCity2DOM = document.querySelector("#artistCity2")
let artistHeaderDOM = document.querySelector("#artistHeader")
let artistAlbumsDOM = document.querySelector("#artistAlbums")
let artistBioImgDOM = document.querySelector("#artistBioImg")
let artistBioPDOM = document.querySelector("#artistBioP")
let artistInsDOM = document.querySelector("#artistIns")
let artistListDOM = document.querySelector("#artistList")
let artistBgDOM = document.querySelector("#artistBg")
let ButtonsDOM = document.querySelector("#Buttons")

let inputData = document.querySelector("#data");
let buttonAdd = document.querySelector("#add");

const addButton = () => {
    let buttons = ` <button type="button" id="albums" class="btn btn-outline-light btn-sm mx-4 mt-4"><i
    class="bi bi-music-note-list"></i> Albümler</button>
<button type="button" id="singles" class="btn btn-outline-light btn-sm me-4 mt-4"><i
    class="bi bi-music-note"></i> Single'lar ve EP'ler</button> `

    ButtonsDOM.innerHTML = buttons;
}

addButton();

let buttonAlbumsDOM = document.querySelector("#albums")
let buttonSingleDOM = document.querySelector("#singles")

const addArtistPN = (info) => {

    let artist = `

    <img src="${info.visuals.avatarImage.sources[0] != undefined ? info.visuals.avatarImage.sources[0].url : "https://cdn-icons-png.flaticon.com/512/149/149071.png" }"
    class="img-fluid artistImg mt-2" alt="" srcset="">
    <h4 class="mt-2 text-white artistName"> <span style="font-size: 13px;">☑️</span> ${info.profile.name}</h4>
    <h6 class="text-white-50 nick">Sanatçı</h6>

    `
    return artist;
}

const addArtistFL = (info) => {

    let artistFL = `
    <div class="col-md-12 me-3 d-flex justify-content-center align-items-center">
        <h5 class="monthListenerNumber mt-2 ms-1 text-white">${info.stats.followers}</h5>
    </div>
    <div class="col-md-12 d-flex justify-content-center align-items-center">
        <h5 class="monthListenerNumber mt-2 ms-1 text-white">${info.stats.monthlyListeners}</h5>
    </div>
    `
    return artistFL;
}

const addArtistCity = (info) => {
    let index = 1;
    let aa = "";

    for (let i = 0; i <= 1; i++) {

        let artistCity =
            `
        <div class="col-6 col-sm-6 col-md-6 d-flex justify-content-start align-items-center me-2 me-sm-4 me-md-0">
            <div class="col-md-4 d-flex align-items-center justify-content-end ">
                <h4 class="text-white cityNumber numberBox me-3">0${index++}</h4>
            </div>
          <div class="col-md-8 d-flex flex-column">
    
            <h5 class="text-white cityName">${info.stats.topCities.items[i].city} - ${info.stats.topCities.items[i].country}</h5>
            <h6 class="text-white-50 cityListen">${info.stats.topCities.items[i].numberOfListeners} dinleyici</h6>
    
          </div>
        </div>

        `
        aa += artistCity
    }

    return aa;

}

const addArtistCity2 = (info) => {
    let index = 3;
    let aa = "";

    for (let i = 2; i <= 3; i++) {

        let artistCity =
            `
        <div class="col-6 col-sm-6 col-md-6 d-flex justify-content-start align-items-center me-2 me-sm-4 me-md-0">
            <div class="col-md-4 d-flex align-items-center justify-content-end ">
                <h4 class="text-white cityNumber numberBox me-3">0${index++}</h4>
            </div>
          <div class="col-md-8 d-flex flex-column">
    
            <h5 class="text-white cityName">${info.stats.topCities.items[i].city} - ${info.stats.topCities.items[i].country}</h5>
            <h6 class="text-white-50 cityListen">${info.stats.topCities.items[i].numberOfListeners} dinleyici</h6>
    
          </div>
        </div>

        `
        aa += artistCity
    }

    return aa;

}

const addArtistHeader = (info) => {
    let artistHeader = `
    <img src="${info.visuals.headerImage.sources[0].url}" class="headerImg borderTop borderHeader" alt="header">
    `
    return artistHeader;

}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

const addArtistAlbums = (info) => {



    let aa = "";

    for (let i = 0; i <= 2; i++) {

        let artistAlbumName = info.discography.albums.items[i]!= undefined ? info.discography.albums.items[i].releases.items[0].name : "Bulunamadı"

        if (artistAlbumName.length > 16) {
            artistAlbumName = artistAlbumName.slice(0, 15) + "..."
        }
        else {
            artistAlbumName
        }

        let artistAlbums =
            `
            <div class="col-12 col-sm-12 col-md-3 col-xl-4 d-flex mt-1 justify-content-center mb-5 mx-md-3 mx-xl-0">
            <div class="d-flex flex-column bg-dark albumCard px-3 py-2">
                <img class="img-fluid albumImg mt-1"
                    src="${info.discography.albums.items[i] != undefined ? info.discography.albums.items[i].releases.items[0].coverArt.sources[0].url : "https://cdn-icons.flaticon.com/png/512/1156/premium/1156412.png?token=exp=1658579623~hmac=b91f7e05df096a3b6278eb513f41a7be"}" alt=""
                    srcset="">
                <h5 class="albumName mt-3 text-center">${capitalizeFirstLetter(artistAlbumName)}</h5>
                <p class="albumInfo mt-0 mb-1 text-center ">${info.discography.albums.items[i] != undefined ? info.discography.albums.items[i].releases.items[0].date.year : "Bulunamadı" } <i class="bi bi-dot"></i> Albüm</p>
            </div>
        </div>

        `
        aa += artistAlbums
    }

    return aa;

}

const addArtistSingle = (info) => {
    let aa = "";

    for (let i = 0; i <= 2; i++) {

        let artistSingleName = info.discography.singles.items[i] != undefined ? info.discography.singles.items[i].releases.items[0].name : "Bulunamadı"

        if (artistSingleName.length > 17) {
            artistSingleName = artistSingleName.slice(0, 15) + "..."
        }
        else {
            artistSingleName
        }

        let artistSingles =
            `
            <div class="col-12 col-sm-12 col-md-3 col-xl-4 d-flex mt-1 justify-content-center mb-5 mx-md-3 mx-xl-0">
            <div class="d-flex flex-column bg-dark albumCard px-3 py-2">
                <img class="img-fluid albumImg mt-1"
                    src="${info.discography.singles.items[i] != undefined ? info.discography.singles.items[i].releases.items[0].coverArt.sources[0].url : "https://cdn-icons.flaticon.com/png/512/1156/premium/1156412.png?token=exp=1658579623~hmac=b91f7e05df096a3b6278eb513f41a7be" }" alt=""
                    srcset="">
                <h5 class="albumName mt-3 text-center">${capitalizeFirstLetter(artistSingleName)}</h5>
                <p class="albumInfo mt-0 mb-1 text-center">${info.discography.singles.items[i] != undefined ? info.discography.singles.items[i].releases.items[0].date.year : "Bulunamadı" } <i class="bi bi-dot"></i> ${capitalizeFirstLetter(info.discography.singles.items[i].releases.items[0].type)}</p>
            </div>
        </div>

        `
        aa += artistSingles
    }

    return aa;

}

const getButtons = (info) => {

    buttonAlbumsDOM.addEventListener("click", function () {
        artistAlbumsDOM.innerHTML = addArtistAlbums(info);
    });

    buttonSingleDOM.addEventListener("click", function () {
        artistAlbumsDOM.innerHTML = addArtistSingle(info)
    })

}

const addArtistBioImg = (info) => {
    let artistBioImg = `
    <img class="infoImg" src="${info.visuals.gallery.items[0] != undefined ? info.visuals.gallery.items[0].sources[0].url : info.visuals.avatarImage.sources[0].url }" alt="" srcset="">
        `
    return artistBioImg;

}

const addArtistBioP = (info) => {
    let artistBioP = `
    <p class="infoP p-3"> ${info.profile.biography.text != undefined ? info.profile.biography.text : "Biyografi Bilgisi Yok" } </p>
        `
    return artistBioP;

}

const addArtistIns = (info) => {


    if (info.profile.externalLinks.items.length <= 2) {
        let artistIns = `
    
    <a href="${info.profile.externalLinks.items[0] != undefined ? info.profile.externalLinks.items[0].url : "#"}" target="_blank" class="socialP">
        <div class="d-flex justify-content-center align-items-center">
            <img class="social me-2" src="https://cdn-icons-png.flaticon.com/512/1077/1077042.png"
                alt="" srcset="">
            <p class="me-4 mt-3 infoP fw-bold">Instagram</p>
        </div>
    </a>
    
        <a href="${info.profile.externalLinks.items[1] != undefined ? info.profile.externalLinks.items[1].url : "#"}" target="_blank" class="socialP">
        <div class="d-flex justify-content-center align-items-center">
            <img class="social me-2" src="https://cdn-icons-png.flaticon.com/512/733/733635.png"
                alt="" srcset="">
            <p class="me-4 mt-3 infoP fw-bold">Twitter</p>
        </div>
    </a>
    
            `
        return artistIns;
    } else {
        let artistIns = `


        <a href="${info.profile.externalLinks.items[0] != undefined ? info.profile.externalLinks.items[0].url : "#"}" target="_blank" class="socialP">
        <div class="d-flex justify-content-center align-items-center">
            <img class="social me-2" src="https://cdn-icons-png.flaticon.com/512/1051/1051309.png"
                alt="" srcset="">
            <p class="me-4 mt-3 infoP fw-bold">Facebook</p>
        </div>
    </a>
    
    <a href="${info.profile.externalLinks.items[1] != undefined ? info.profile.externalLinks.items[1].url : "#"}" target="_blank" class="socialP">
        <div class="d-flex justify-content-center align-items-center">
            <img class="social me-2" src="https://cdn-icons-png.flaticon.com/512/1077/1077042.png"
                alt="" srcset="">
            <p class="me-4 mt-3 infoP fw-bold">Instagram</p>
        </div>
    </a>
    
        <a href="${info.profile.externalLinks.items[2] != undefined ? info.profile.externalLinks.items[2].url : "#"}" target="_blank" class="socialP">
        <div class="d-flex justify-content-center align-items-center">
            <img class="social me-2" src="https://cdn-icons-png.flaticon.com/512/733/733635.png"
                alt="" srcset="">
            <p class="me-4 mt-3 infoP fw-bold">Twitter</p>
        </div>
    </a>
    
            `
        return artistIns;
    }


}

const artistBgStyles = (info) => {

    const style = `
    
    background: linear-gradient(0deg, #191414 40%, ${info.visuals.headerImage.extractedColors.colorRaw.hex} 140%);
    `;

    artistBgDOM.style.cssText = style;

}

const getResults = (info) => {

    artistListDOM.innerHTML = "";


    for (let i = 0; i <= 7; i++) {

        let id = info.artists.items[i].data.uri
        const myArray = id.split(":");
        word = myArray[2];

        artistListDOM.innerHTML +=
            `
            <div class="me-5 d-flex mt-1 justify-content-center mb-5" id="${word}">
                <div class="d-flex flex-column bg-dark albumCard px-3 py-2">
                    <img class="albumImg mt-1" src="${info.artists.items[i].data.visuals.avatarImage.sources[0].url}" alt="" srcset="">
                        <h5 class="albumName mt-3 text-center">${info.artists.items[i].data.profile.name}</h5>
                    <p class="albumInfo mt-0 mb-1 text-center"></p>
                </div>
            </div>

        `
    }
    return artistListDOM.innerHTML, word;
}


const git = () => {

    let temp = [];
    for (let i = 0; i <= 7; i++) {
        temp[i] = document.querySelector("#artistList").children[i].id
    }
    console.log(temp)
    let kimlikDOM = document.getElementById(temp[0])
    kimlikDOM.addEventListener("click", function () {

        // console.log(temp[0])
        getArtist(temp[0]);

    });
}

getArtist = (id) => {

    if (id == undefined) {
        id = "1KXTegXtnCPKXjRaX1llcD"
    }

    let url = "https://spotify23.p.rapidapi.com/artist_overview/?id="
    url = url + id

    // console.log(id)
    // console.log(url)

    fetch(url, options)
        .then(response => response.json())
        // .then(response => console.log(response.data.artist))
        .then(response => {
            let artist = "";
            let artistFL = "";
            let artistCity = "";
            let artistCity2 = "";
            let artistHeader = "";
            let artistAlbums = "";
            let artistBioImg = "";
            let artistBioP = "";
            let artistIns = "";

            getButtons(response.data.artist)
            artist += addArtistPN(response.data.artist)
            artistFL += addArtistFL(response.data.artist)
            artistCity += addArtistCity(response.data.artist)
            artistCity2 += addArtistCity2(response.data.artist)
            artistHeader += addArtistHeader(response.data.artist)
            artistAlbums += addArtistAlbums(response.data.artist)
            artistBioImg += addArtistBioImg(response.data.artist)
            artistBioP += addArtistBioP(response.data.artist)
            artistIns += addArtistIns(response.data.artist)
            artistBgStyles(response.data.artist)

            artistPpDOM.innerHTML = artist;
            artistFLDOM.innerHTML = artistFL;
            artistCityDOM.innerHTML = artistCity;
            artistCity2DOM.innerHTML = artistCity2;
            artistHeaderDOM.innerHTML = artistHeader;
            artistAlbumsDOM.innerHTML = artistAlbums;
            artistBioImgDOM.innerHTML = artistBioImg;
            artistBioPDOM.innerHTML = artistBioP;
            artistInsDOM.innerHTML = artistIns;
        })
        .catch(err => console.error(err));

}

const search = () => {
    let url = "https://spotify23.p.rapidapi.com/search/?q="

    if (inputData.value) {
        url = url + inputData.value + "&type=artists&offset=0&limit=8&numberOfTopResults=5"
    }

    fetch(url, options)
        .then(response => response.json())
        .then(response => {
            // console.log(response)
            getResults(response)
            git()
        })
        .catch(err => console.error(err));

}

buttonAdd.addEventListener("click", function () {
    search()
});



getArtist();

