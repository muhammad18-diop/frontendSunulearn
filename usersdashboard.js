const API_URL = "https://backendsunulearn-3.onrender.com/api/utilisateurs";

async function chargerUsers() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        const table = document.getElementById("usersTable");
        console.log(data);
        
        table.innerHTML = "";

        data.users.forEach(user => {
            // Configuration adaptative du badge de rôle
            const roleBadgeClass = user.role === "admin"
                ? "bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-100 dark:border-purple-900/30"
                : "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/30";

            // Configuration adaptative du badge de statut
            const statusBadgeClass = user.is_active === true
                ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30"
                : "bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-400 border border-red-100 dark:border-red-900/30";

            const statusText = user.is_active === true ? "Actif" : "Inactif";

            // CORRECTION : Application de "hover:bg-gray-50/50 dark:hover:bg-gray-700/40" pour enlever le survol blanc éclatant
            table.innerHTML += `
                <tr class="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50/50 dark:hover:bg-gray-700/40 transition-colors duration-150 text-gray-900 dark:text-gray-300">

                    <!-- NOM -->
                    <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        ${user.name}
                    </td>

                    <!-- EMAIL -->
                    <td class="px-6 py-4">
                        ${user.email}
                    </td>

                    <!-- RÔLE -->
                    <td class="px-6 py-4">
                        <span class="px-2.5 py-0.5 text-xs font-medium rounded-md ${roleBadgeClass}">
                            ${user.role}
                        </span>
                    </td>

                    <!-- STATUT -->
                    <td class="px-6 py-4">
                        <span class="px-2.5 py-0.5 text-xs font-medium rounded-md ${statusBadgeClass}">
                            ${statusText}
                        </span>
                    </td>

                    <!-- DATE -->
                    <td class="px-6 py-4 text-gray-500 dark:text-gray-400 text-xs">
                        ${new Date(user.created_at).toLocaleDateString()}
                    </td>

                    <!-- ACTIONS -->
                    <td class="px-6 py-4 text-center">
                        <div class="flex items-center justify-center gap-2">
                            <!-- BOUTON MODIFIER : Style Indigo Vibrant -->
                            <button
                                onclick="modifierUser(${user.id})"
                                class="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-sm transition focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-800"
                            >
                                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M17.414 2.586a2 2 0 010 2.828l-9.9 9.9-4.243 1.06 1.06-4.243 9.9-9.9a2 2 0 012.828 0z"/>
                                </svg>
                                Modifier
                            </button>

                            <!-- BOUTON SUPPRIMER : Style Rouge Adouci -->
                            <button
                                onclick="supprimerUser(${user.id})"
                                class="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 dark:bg-red-500/90 dark:hover:bg-red-600 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-sm transition focus:ring-2 focus:ring-red-300 dark:focus:ring-red-900"
                            >
                                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M6 7a1 1 0 011-1h6a1 1 0 011 1v9a2 2 0 01-2 2H8a2 2 0 01-2-2V7zm3-3a1 1 0 00-1 1v1h4V5a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                                </svg>
                                Supprimer
                            </button>
                        </div>
                    </td>

                </tr>
            `;
        });

    } catch (error) {
        console.error("Erreur chargement users :", error);
    }
}

// Déclaration des fonctions pour éviter les erreurs de référence dans la console
function modifierUser(id) {
    console.log("Modifier l'utilisateur ID :", id);
}

function supprimerUser(id) {
    if (confirm("Voulez-vous vraiment supprimer cet utilisateur ?")) {
        console.log("Supprimer l'utilisateur ID :", id);
    }
}

// Exécution globale
chargerUsers();
