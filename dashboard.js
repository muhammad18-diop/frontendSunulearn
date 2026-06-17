async function chargerStats() {
    try {
        let role = localStorage.getItem("role");
        if (role !== "admin") {
            window.location.href = "404.html";
            return;
        }

        const token = localStorage.getItem("token");

        const response = await fetch("https://backendsunulearn-3.onrender.com/api/dashboard/stats", {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }

        const data = await response.json();

        if (data && data.stats) {
            document.getElementById("totalUsers").textContent = data.stats.totalUsers ?? 0;
            document.getElementById("activeUsers").textContent = data.stats.activeUsers ?? 0;
        }

        document.body.style.display = "block"; 

    } catch (error) {
        console.error("Erreur stats :", error);
        window.location.href = "404.html"; 
    }
}

async function compterCours() {
    try {
        const response = await fetch("programmes.json");

        if (!response.ok) {
            throw new Error("Impossible de charger programmes.json");
        }

        const data = await response.json();

        document.querySelectorAll("#nombreCours").forEach(el => {
            el.textContent = data.length;
        });

    } catch (error) {
        console.error("Erreur comptage cours :", error);
    }
}

const fichiers = [
    "enadirectA.json",
    "enadirectB.json",
    "coursESPDUT.json",
    "ept.json",
    "ipsl.json",
    "greffe.json",
    "educateur.json"
];

let tousLesCours = [];
const coursParPage = 7;
let pageActuelle = 1;

async function chargerCours() {
    try {
        const responses = await Promise.all(
            fichiers.map(f => fetch(f))
        );

        const datas = await Promise.all(
            responses.map(r => r.json())
        );

        tousLesCours = datas.flat();

        document.querySelectorAll("#nombreCours").forEach(el => {
            el.textContent = `${tousLesCours.length} cours`;
        });

        afficherPage(1);

    } catch (error) {
        console.error("Erreur chargement cours :", error);
    }
}

function afficherPage(page) {
    pageActuelle = page;

    const table = document.getElementById("tableCours");
    table.innerHTML = "";

    const debut = (page - 1) * coursParPage;
    const fin = debut + coursParPage;

    const coursPage = tousLesCours.slice(debut, fin);

    coursPage.forEach(cours => {
        // AJOUT : Remplacement du survol par un style discret "hover:bg-gray-50/50 dark:hover:bg-gray-700/40"
        table.innerHTML += `
<tr class="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50/50 dark:hover:bg-gray-700/40 transition-colors duration-150">

    <!-- TITRE -->
    <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        ${cours.titre}
    </td>

    <!-- CATÉGORIE -->
    <td class="px-6 py-4">
        <span class="bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-xs font-medium px-2.5 py-0.5 rounded-md border border-indigo-100 dark:border-indigo-900/30">
            ${cours.categorie}
        </span>
    </td>

    <!-- PDF -->
    <td class="px-6 py-4">
        <a href="${cours.lien}" target="_blank"
           class="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline text-xs font-medium">
            <svg class="w-4 h-4 text-red-500 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V7l-5-4H4z"/>
            </svg>
            Voir PDF
        </a>
    </td>

    <!-- ACTIONS -->
    <td class="px-6 py-4 text-center space-x-2">
        <!-- BOUTON MODIFIER : Style Indigo adapté au mode sombre -->
        <button onclick="modifierCours(${cours.id})"
            class="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-sm transition focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-800">
            <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.414 2.586a2 2 0 010 2.828l-9.9 9.9-4.243 1.06 1.06-4.243 9.9-9.9a2 2 0 012.828 0z"/>
            </svg>
            Modifier
        </button>

        <!-- BOUTON SUPPRIMER : Style Rouge corail adouci -->
        <button onclick="supprimerCours(${cours.id})"
            class="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 dark:bg-red-500/90 dark:hover:bg-red-600 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-sm transition focus:ring-2 focus:ring-red-300 dark:focus:ring-red-900">
            <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                      d="M6 7a1 1 0 011-1h6a1 1 0 011 1v9a2 2 0 01-2 2H8a2 2 0 01-2-2V7zm3-3a1 1 0 00-1 1v1h4V5a1 1 0 00-1-1H9z"
                      clip-rule="evenodd"/>
            </svg>
            Supprimer
        </button>
    </td>

</tr>
`;
    });

    afficherPagination();
}

function afficherPagination() {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    const totalPages = Math.ceil(tousLesCours.length / coursParPage);

    // Style de base pour les boutons de pagination
    const baseBtnClass = "px-3 py-1.5 text-sm font-medium rounded-lg transition border text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
    const activeBtnClass = "px-3 py-1.5 text-sm font-medium rounded-lg bg-indigo-600 text-white dark:bg-indigo-500 shadow-sm";

    if (pageActuelle > 1) {
        pagination.innerHTML += `
            <button onclick="afficherPage(${pageActuelle - 1})" class="${baseBtnClass}">
                ←
            </button>
        `;
    }

    for (let i = 1; i <= totalPages; i++) {
        pagination.innerHTML += `
            <button onclick="afficherPage(${i})" class="${i === pageActuelle ? activeBtnClass : baseBtnClass}">
                ${i}
            </button>
        `;
    }

    if (pageActuelle < totalPages) {
        pagination.innerHTML += `
            <button onclick="afficherPage(${pageActuelle + 1})" class="${baseBtnClass}">
                →
            </button>
        `;
    }
}

function modifierCours(id) {
    console.log("Modifier :", id);
}

function supprimerCours(id) {
    if (confirm("Supprimer ce cours ?")) {
        console.log("Supprimer :", id);
    }
}

// Lancement des fonctions au démarrage
chargerStats();
chargerCours();
