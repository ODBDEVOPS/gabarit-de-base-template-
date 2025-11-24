# gabarit-de-base-template-
Dépôt GitHub Pages qui intègre la gestion des fichiers statiques et l'accès aux données JSON.

# 🚀 [NOM DE VOTRE PROJET] : Site Statique Propulsé par JSON & JS

Ce dépôt contient le code source d'un site web entièrement statique, hébergé via GitHub Pages. Il utilise l'approche **full-statique (HTML/CSS/JS)** pour fonctionner sans aucun serveur backend ni base de données traditionnelle, en s'appuyant sur un fichier **JSON** comme source de données.

## ✨ Fonctionnalités Clés

* **100% Statique :** Zéro coût d'hébergement backend, maintenance simplifiée.
* **Données Centralisées :** Utilisation du fichier `data/data.json` comme "base de données" en lecture seule.
* **Mise à Jour Facile :** Modification des données en éditant simplement le fichier `data.json` et en poussant (push) les changements sur GitHub.
* **Performance :** Chargement rapide des données via l'API `fetch` de JavaScript.

## 📁 Structure du Projet

| Fichier/Dossier | Rôle | Description |
| :--- | :--- | :--- |
| `index.html` | Vue (Frontend) | Le fichier principal. Structure HTML de la page. |
| `style.css` | Style (CSS) | Les règles de style pour l'apparence du site. |
| `app.js` | Moteur (JavaScript) | Script responsable du chargement du `data.json` et de la génération dynamique de l'HTML. |
| `data/` | Données Statiques | Contient la source de données. |
| `data/data.json` | Base de Données | Le fichier JSON qui stocke tout le contenu affiché. **C'est le fichier à modifier pour les mises à jour.** |

## 🛠️ Démarrage Local (Développement)

Pour travailler sur le projet en local, il est recommandé d'utiliser un serveur web simple pour éviter les problèmes de sécurité du navigateur (Cross-Origin Resource Sharing ou CORS) lors du chargement des fichiers locaux.

1.  **Cloner le dépôt :**
    ```bash
    git clone [https://www.wordreference.com/fren/d%C3%A9p%C3%B4t](https://www.wordreference.com/fren/d%C3%A9p%C3%B4t)
    cd [mon-repo-statique]
    ```

2.  **Lancer un serveur local :**
    * **Avec Python (si installé) :**
        ```bash
        python3 -m http.server 8000
        ```
    * **Avec l'extension "Live Server" de VS Code :** Ouvrez le projet et lancez le serveur via l'extension.

3.  **Accéder au site :** Ouvrez votre navigateur et allez à l'adresse `http://localhost:8000`.

## ⚙️ Déploiement (GitHub Pages)

Le déploiement est géré automatiquement par GitHub Pages.

1.  **Poussez votre code** sur la branche `main` (ou `master`).
2.  Dans les paramètres du dépôt (**Settings > Pages**), assurez-vous que la source de déploiement est configurée sur la branche `main` (ou `master`) et le dossier racine (`/ (root)`).
3.  Votre site sera disponible à l'URL : `https://[Votre Nom d'Utilisateur].github.io/[Nom du Dépôt]/`

## 🔄 Comment Mettre à Jour le Contenu

Pour actualiser les données affichées sur le site :

1.  Modifiez le fichier `data/data.json` localement.
2.  Commitez et poussez les changements vers GitHub :
    ```bash
    git add .
    git commit -m "Mise à jour des articles via data.json"
    git push origin main
    ```
3.  GitHub Pages reconstruira et publiera automatiquement le site avec les nouvelles données en quelques secondes.

---

### **Auteur :**

[Votre Nom ou Pseudo]
