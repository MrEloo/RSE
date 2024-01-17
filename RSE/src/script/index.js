


const weightOfPicture = 8 //gCO2e
const weightOfVideo = 0.5 //kgCO2e

const isResponsive = true

let totalWeightOfPicture;
let totalWeightOfVideo;


function isResponsive() {

    let responsiveWeight;
    if (isResponsive === 'true') {
        return responsiveWeight = 0.5 //gCO2e;
    } else {
        return responsiveWeight = 0 //gCO2e;
    }
}



const allPictures = document.querySelectorAll('.pictures')
const allVideos = document.querySelectorAll('.pictures')

allPictures.forEach((picture) => {
    totalWeightOfPicture *= weightOfPicture
})

allVideos.forEach((picture) => {
    totalWeightOfVideo *= weightOfVideo
})

function GetHebergeur() {
    const active = document.querySelector('.active')

    let weightOfHebergeur;

    switch (true) {
        case active === 'partagé':
            weightOfHebergeur = 10 //kgCO2e
            break;
        case active === 'dédié':
            weightOfHebergeur = 20 //kgCO2e
            break;
        case active === 'cloud':
            weightOfHebergeur = 30 //kgCO2e

    }

    return weightOfHebergeur
}

function GetLanguage() {
    const languages = document.querySelectorAll('languages')

    const languagesUseed = [];

    let languagesConsuption;

    languages.forEach((language) => {
        language.push(languagesUseed)
    })

    if (languagesUseed.includes('react') && languagesUseed.includes('javascript')) {
        languagesConsuption = 10 //kgCO2e
    }
    if (languagesUseed.includes('react') && languagesUseed.includes('php')) {
        languagesConsuption = 20 //kgCO2e
    }
    if (languagesUseed.includes('javascript') && languagesUseed.includes('react')) {
        languagesConsuption = 30 //kgCO2e
    }
    if (languagesUseed.includes('javascript') && languagesUseed.includes('php')) {
        languagesConsuption = 40 //kgCO2e
    }

    return languagesConsuption

}

return weightOfHebergeur


const totalConsuption = GetHebergeur() + GetLanguage() + isResponsive() + totalWeightOfPicture + totalWeightOfVideo

if (totalConsuption > 10) {
    'votre site web est écologique'
} else {
    'votre site web ,n est pas écologique'
}