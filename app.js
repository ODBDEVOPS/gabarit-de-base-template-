// Chemin vers votre fichier JSON
const DATA_PATH = './data/data.json'; 
const catalogue = document.getElementById('catalogue');

/**
 * Charge les données depuis le fichier JSON.
 */
async function loadData() {
    try {
        const response = await fetch(DATA_PATH);

        if (!response.ok) {
            throw new Error(`Erreur de chargement: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        renderArticles(data);

    } catch (error) {
        console.error("Impossible de charger les données :", error);
        catalogue.innerHTML = '<p class="error">Une erreur est survenue lors du chargement des articles.</p>';
    }
}

/**
 * Prend les données JSON et crée les éléments HTML correspondants.
 * @param {Array} articles - Le tableau des objets article.
 */
function renderArticles(articles) {
    // Vider le message de chargement
    catalogue.innerHTML = ''; 
    
    if (articles.length === 0) {
        catalogue.innerHTML = '<p>Aucun article trouvé.</p>';
        return;
    }

    articles.forEach(article => {
        const card = document.createElement('div');
        card.className = 'article-card';

        // Déterminer la classe de style en fonction du statut
        const statusClass = article.status === 'publié' ? 'status-ok' : 'status-rupture';
        
        card.innerHTML = `
            <h2>${article.titre}</h2>
            <p><strong>Auteur :</strong> ${article.auteur}</p>
            <p><strong>Statut :</strong> <span class="${statusClass}">${article.status.toUpperCase()}</span></p>
            <p>${article.contenu_apercu}</p>
        `;
        
        catalogue.appendChild(card);
    });
}

// Lancer le chargement des données au démarrage de la page
loadData();
