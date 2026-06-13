const API_URL = "http://localhost:3000/api/utilisateurs";

async function chargerUsers() {
    try {

        const response = await fetch(API_URL);

        const data = await response.json();

        const table = document.getElementById("usersTable");
        console.log(data);
        
        table.innerHTML = "";

        data.users.forEach(user => {

            table.innerHTML += `
                <tr class="border-b hover:bg-gray-50">

                    <td class="px-4 py-3 font-medium">
                        ${user.name}
                    </td>

                    <td class="px-4 py-3">
                        ${user.email}
                    </td>

                    <td class="px-4 py-3">
                        <span class="px-2 py-1 text-xs rounded bg-blue-100 text-blue-700">
                            ${user.role}
                        </span>
                    </td>

                    <td class="px-4 py-3">
                        <span class="px-2 py-1 text-xs rounded ${
                            user.is_active === true
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                        }">
                            ${user.is_active}
                        </span>
                    </td>

                    <td class="px-4 py-3">
                        ${new Date(user.created_at).toLocaleDateString()}
                    </td>

                    <td class="px-4 py-3 flex gap-2">

                        <button
                            onclick="modifierUser(${user.id})"
                            class="bg-yellow-500 text-white px-3 py-1 rounded"
                        >
                            Modifier
                        </button>

                        <button
                            onclick="supprimerUser(${user.id})"
                            class="bg-red-500 text-white px-3 py-1 rounded"
                        >
                            Supprimer
                        </button>

                    </td>

                </tr>
            `;
        });

    } catch (error) {
        console.error("Erreur chargement users :", error);
    }
}

chargerUsers();