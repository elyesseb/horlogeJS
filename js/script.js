function demarrerLaMontre() {
    // Séléctionner les aiguilles de montre
    const AIGUILLEHR = document.querySelector("#hour");
    const AIGUILLEMIN = document.querySelector("#minute");
    const AIGUILLESEC = document.querySelector("#second");
    //Extraire l'heure actuel à l'aide de l'objet Date()
    const HRACTUEL = new Date();
    //Stocker l'heure , minute , seconde  dans des varaiables
    const HR = HRACTUEL.getHours();
    const MIN = HRACTUEL.getMinutes();
    const SEC = HRACTUEL.getSeconds();
    // Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
    // Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
    const HRDEGRE = (HR * 60) / 2;
    const MINDEGRE = (MIN * 360) / 60;
    const SECDEGRE = (SEC * 360) / 60;
    // Déplacer les aiguilles 
    AIGUILLEHR.style.transform = `rotate(${HRDEGRE}deg)`;
    AIGUILLEMIN.style.transform = `rotate(${MINDEGRE}deg)`;
    AIGUILLESEC.style.transform = `rotate(${SECDEGRE}deg)`;
};
// Exercuter la fonction chaque second
setInterval(demarrerLaMontre, 1000);