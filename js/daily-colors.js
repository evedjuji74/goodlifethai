// Script pour changer la couleur du header selon le jour de la semaine (tradition thaïe)
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    
    // Couleurs traditionnelles thaïes par jour
    const thaiColors = {
        0: '#FF6347', // Dimanche - rouge
        1: '#ADD8E6', // Lundi - bleu clair
        2: '#FFB6C1', // Mardi - rose
        3: '#98FB98',  // Mercredi - vert
        4: '#FFA500', // Jeudi - orange
        5: '#4169E1', // Vendredi - bleu foncé
        6: '#9370DB'  // Samedi - violet
    };
    
    // Obtenir le jour actuel (0 = dimanche, 1 = lundi, etc.)
    const today = new Date().getDay();
    
    // Appliquer la couleur du jour au header
    if (header && thaiColors[today]) {
        header.style.backgroundColor = thaiColors[today];
        header.style.transition = 'background-color 0.3s ease';
    }
});
