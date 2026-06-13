
async function chargerStats() {
    try {
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
        console.log("Stats:", data);

        if (data && data.stats) {
            document.getElementById("totalUsers").textContent = data.stats.totalUsers ?? 0;
            document.getElementById("activeUsers").textContent = data.stats.activeUsers ?? 0;
        }

    } catch (error) {
        console.error("Erreur stats :", error);

        document.getElementById("totalUsers").textContent = "--";
        document.getElementById("activeUsers").textContent = "--";
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
    "coursESPDUT.json"
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

        table.innerHTML += `
<tr class="border-b hover:bg-gray-50">

    <!-- TITRE -->
    <td class="px-6 py-4 font-medium">
        ${cours.titre}
    </td>

    <!-- CATÉGORIE -->
    <td class="px-6 py-4">
        <span class="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs">
            ${cours.categorie}
        </span>
    </td>

    <!-- PDF -->
    <td class="px-6 py-4">
        <a href="${cours.lien}" target="_blank"
           class="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline">

            
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V7l-5-4H4z"/>
            </svg>

            Voir PDF
        </a>
    </td>

    
    <td class="px-6 py-4 text-center space-x-2">


        <button onclick="modifierCours(${cours.id})"
            class="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1.5 rounded-md transition">

            <!-- SVG EDIT -->
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.414 2.586a2 2 0 010 2.828l-9.9 9.9-4.243 1.06 1.06-4.243 9.9-9.9a2 2 0 012.828 0z"/>
            </svg>

            Modifier
        </button>

        <!-- SUPPRIMER -->
        <button onclick="supprimerCours(${cours.id})"
            class="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-md transition">

            <!-- SVG DELETE -->
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
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

    if (pageActuelle > 1) {
        pagination.innerHTML += `
            <button onclick="afficherPage(${pageActuelle - 1})"
                class="px-4 py-2 border rounded">
                ←
            </button>
        `;
    }

    for (let i = 1; i <= totalPages; i++) {
        pagination.innerHTML += `
            <button onclick="afficherPage(${i})"
                class="px-4 py-2 rounded ${i === pageActuelle ? 'bg-blue-600 text-white' : 'border'}">
                ${i}
            </button>
        `;
    }

    if (pageActuelle < totalPages) {
        pagination.innerHTML += `
            <button onclick="afficherPage(${pageActuelle + 1})"
                class="px-4 py-2 border rounded">
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




chargerStats();
chargerCours();