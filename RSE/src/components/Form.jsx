import React from 'react';
import { useState } from 'react';

const Form = () => {

    const [isSubmited, setIsSubmited] = useState(false);
    const [totalConsuption, setTotalConsuption] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault(); // Empêche le comportement par défaut de rechargement de la page lors de la soumission du formulaire

        // Ajoutez ici la logique de traitement du formulaire
        // Par exemple, vous pouvez récupérer les valeurs des champs du formulaire
        const imageCount = event.target.elements.imageCount.value;
        const videoCount = event.target.elements.videoCount.value;

        const storage = event.target.elements.storage.value;


        const weightOfPicture = 8 //gCO2e
        const weightOfVideo = 0.5 //kgCO2e



        let totalWeightOfPicture;
        let totalWeightOfVideo;


        function isResponsive() {

            return document.getElementById('responsive').checked ? 0.5 : 0;
        }


        totalWeightOfPicture = imageCount * weightOfPicture
        totalWeightOfVideo = videoCount * weightOfVideo



        function GetHebergeur() {
            const poidsParType = {
                'partagé': 10, // kgCO2e
                'dédié': 20,   // kgCO2e
                'cloud': 30    // kgCO2e
            };

            // Utilisez le type de stockage pour accéder au poids associé, retourne 0 si le type n'est pas trouvé
            return poidsParType[storage] || 0;
        }




        const totalConsuption = isResponsive() + GetHebergeur() + totalWeightOfPicture + totalWeightOfVideo

        setTotalConsuption(totalConsuption)



        if (totalConsuption > 10) {
            console.log('votre site web est écologique')
        } else {
            console.log("votre site web , n'est pas écologique")
        }


        setIsSubmited(true)

        event.target.reset();
    };

    return (
        <>
            {isSubmited === false && (
                <form action="" className='form' onSubmit={handleSubmit}>
                    <fieldset>
                        <label htmlFor="imageCount">Nombre d'image</label>
                        <input type="number" name="imageCount" id="imageCount" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="videoCount">Nombre de vidéo</label>
                        <input type="number" name="videoCount" id="videoCount" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="responsive">Est-ce responsive ?</label>
                        <input type="checkbox" name="responsive" id="responsive" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="storage">Type de stockage</label>
                        <select name="storage" id="storage">
                            <option value="shared">Partagé</option>
                            <option value="cloud">Cloud</option>
                            <option value="dedicated">Dédié</option>
                        </select>
                    </fieldset>
                    <button type='submit'>Envoyer</button>
                </form>
            )}
            {isSubmited === true && (
                <h1 className='result'>Votre site émet {totalConsuption} kWa</h1>
            )}

        </>
    );
}

export default Form;
