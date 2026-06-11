// 1. Gestion de l'affichage dynamique des cours
async function cours() {
    try {
        const response = await fetch("cours.json");
        if (!response.ok) throw new Error(`Erreur HTTP : ${response.status}`);
        
        const data = await response.json();
        let affiche = document.getElementById("cours");
        
        if (affiche) {
            affiche.innerHTML = "";
            data.forEach(cour => {
                affiche.innerHTML += `
                    <div class="bg-white p-4 rounded-xl shadow" data-aos="flip-left"
                         data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                      <img src="${cour.image}" class="h-48  object-cover rounded-lg">
                      <h2 class="text-xl font-bold mt-4">${cour.titre}</h2>
                      <p class="text-gray-600 my-2">${cour.description}</p>
                      <a href="${cour.lien}" class="inline-flex font-medium items-center text-fg-brand hover:underline">
                        Consulter
                        <svg class="w-4 h-4 ms-2 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
                        </svg>
                      </a>
                    </div>
                `;
            });
        }
    } catch (error) {
        console.error("Impossible de charger les cours :", error);
    }
}

// Lancement du chargement des cours
cours();

// 2. Ciblage unique des éléments de l'interface utilisateur
const btnConnexion = document.getElementById("btnConnexion");
const btnProfile = document.getElementById("btnProfile");
const btnDeconnexion = document.getElementById("btnDeconnexion");
const menuProfile = document.getElementById("menuProfile");

// 3. Récupération et vérification du statut de connexion (Token)
const token = localStorage.getItem("token");

if (token) {
    // Masquer la connexion, afficher le profil
    if (btnConnexion) btnConnexion.classList.add("hidden");
    if (btnProfile) btnProfile.classList.remove("hidden");

    const nom = localStorage.getItem("nom") || "Utilisateur";
    const email = localStorage.getItem("email") || "";

    // Remplissage des blocs de texte du profil
    const elNom = document.getElementById("nomUtilisateur");
    const elProfNom = document.getElementById("profileNom");
    const elProfEmail = document.getElementById("profileEmail");

    if (elNom) elNom.textContent = nom;
    if (elProfNom) elProfNom.textContent = nom;
    if (elProfEmail) elProfEmail.textContent = email;

    // Activation du bouton déconnexion
    if (btnDeconnexion) {
        btnDeconnexion.disabled = false;
        btnDeconnexion.classList.remove("text-gray-400", "cursor-not-allowed");
        btnDeconnexion.classList.add("text-red-600", "hover:bg-gray-100");
    }
}

// 4. Événements et interactions de l'interface (Menu déroulant & Déconnexion)
btnProfile?.addEventListener("click", (e) => {
    e.stopPropagation(); // Évite la fermeture immédiate via le clic document
    menuProfile?.classList.toggle("hidden");
});

btnDeconnexion?.addEventListener("click", () => {
    localStorage.removeItem("token");
    localStorage.removeItem("nom");
    localStorage.removeItem("email");
    window.location.href = "connexion.html";
});

// Fermeture automatique du menu au clic à l'extérieur
document.addEventListener("click", (e) => {
    if (
        btnProfile && menuProfile &&
        !btnProfile.contains(e.target) &&
        !menuProfile.contains(e.target)
    ) {
        menuProfile.classList.add("hidden");
    }
});
