let affiche = document.getElementById("affiche");

// 1. FONCTION CENTRALE ET OPTIMISÉE POUR GÉNÉRER LE RENDU DES CARTES DE COURS
function genererHTMLCours(coursListe) {
    let html = "";
    coursListe.forEach(c => {
        html += `
        <div class="bg-white p-4 rounded-xl shadow" data-aos="flip-left"
             data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <img src="${c.image}" class="h-48  object-cover rounded-lg" alt="${c.titre}">
          <h2 class="text-xl font-bold mt-4">${c.titre}</h2>
          <p class="text-gray-600 my-2">${c.description}</p>
          <a href="${c.lien}" class="lien inline-flex font-medium items-center text-fg-brand hover:underline" target="_blank">
            Consulter
            <svg class="w-4 h-4 ms-2 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
            </svg>
          </a>
        </div>`;
    });
    return html;
}

// 2. RECUPÉRATION ET FILTRAGE DYNAMIQUE DES COURS
async function piloterAffichageCours(categorieFiltre = "Tous") {
    try {
        const response = await fetch("coursESPDUT.json");
        if (!response.ok) throw new Error(`Erreur HTTP : ${response.status}`);
        
        const data = await response.json();
        
        if (affiche) {
            affiche.innerHTML = "";
            
            // Filtrage intelligent
            const coursFiltrés = (categorieFiltre === "Tous") 
                ? data 
                : data.filter(p => p.categorie === categorieFiltre);
                
            affiche.innerHTML = genererHTMLCours(coursFiltrés);
        }
    } catch (error) {
        console.error("Erreur lors du chargement des cours :", error);
    }
}

// Chargement initial au démarrage
piloterAffichageCours();

// 3. ECOUTEURS D'ÉVÉNEMENTS POUR LES FILTRES DE MATIÈRES
document.getElementById("tous")?.addEventListener("click", () => piloterAffichageCours("Tous"));
document.getElementById("math")?.addEventListener("click", () => piloterAffichageCours("Maths"));
document.getElementById("français")?.addEventListener("click", () => piloterAffichageCours("français"));
document.getElementById("pc")?.addEventListener("click", () => piloterAffichageCours("PC"));

// 4. SÉCURISATION ET INTERCEPTION DES CLICS SUR LES LIENS DE DEVOIRS ET COURS
document.addEventListener("click", (e) => {
    const lien = e.target.closest(".lien");
    if (!lien) return;

    const token = localStorage.getItem("token");
    if (!token) {
        e.preventDefault();
        window.location.href = "connexion.html";
    }
});

// 5. ETAT DE L'INTERFACE UTILISATEUR (BARRE DE NAVIGATION)
const btnConnexion = document.getElementById("btnConnexion");
const btnProfile = document.getElementById("btnProfile");
const btnDeconnexion = document.getElementById("btnDeconnexion");
const menuProfile = document.getElementById("menuProfile");

const token = localStorage.getItem("token");

if (token) {
    if (btnConnexion) btnConnexion.classList.add("hidden");
    if (btnProfile) btnProfile.classList.remove("hidden");

    const nom = localStorage.getItem("nom") || "Utilisateur";
    const email = localStorage.getItem("email") || "";
    
    const elNom = document.getElementById("nomUtilisateur");
    const elProfNom = document.getElementById("profileNom");
    const elProfEmail = document.getElementById("profileEmail");

    if (elNom) elNom.textContent = nom;
    if (elProfNom) elProfNom.textContent = nom;
    if (elProfEmail) elProfEmail.textContent = email;
    
    if (btnDeconnexion) {
        btnDeconnexion.disabled = false;
        btnDeconnexion.classList.remove("text-gray-400", "cursor-not-allowed");
        btnDeconnexion.classList.add("text-red-600", "hover:bg-gray-100");
    }
}

btnProfile?.addEventListener("click", (e) => {
    e.stopPropagation(); 
    menuProfile?.classList.toggle("hidden");
});

// Fermeture automatique du menu profil au clic extérieur
document.addEventListener("click", (e) => {
    if (btnProfile && menuProfile && !btnProfile.contains(e.target) && !menuProfile.contains(e.target)) {
        menuProfile.classList.add("hidden");
    }
});

// 6. FIX ET FINALISATION COMPLÈTE DE LA MODAL DE DÉCONNEXION FLOWBITE
btnDeconnexion?.addEventListener("click", (e) => {
    e.stopPropagation(); 
    
    const $logoutModalElement = document.getElementById('logoutModal');
    
    if ($logoutModalElement) {
        let logoutModal;
        
        if (typeof Modal !== 'undefined') {
            logoutModal = new Modal($logoutModalElement);
        } else if (typeof flowbite !== 'undefined' && flowbite.Modal) {
            logoutModal = new flowbite.Modal($logoutModalElement);
        }

        if (logoutModal) {
            menuProfile?.classList.add("hidden");
            logoutModal.show();

            // Gestion de la fermeture / annulation
            const boutonsAnnuler = document.querySelectorAll("[id='btnAnnulerDeconnexion']");
            boutonsAnnuler.forEach(btn => {
                btn.addEventListener("click", () => logoutModal.hide());
            });

            // Confirmation finale de déconnexion
            document.getElementById("btnConfirmerDeconnexion")?.addEventListener("click", () => {
                logoutModal.hide();
                localStorage.removeItem("token");
                localStorage.removeItem("nom");
                localStorage.removeItem("email");
                window.location.replace("index.html");
            });
        } else {
            procederNettoyageSessionDirect();
        }
    } else {
        procederNettoyageSessionDirect();
    }
});

function procederNettoyageSessionDirect() {
    localStorage.removeItem("token");
    localStorage.removeItem("nom");
    localStorage.removeItem("email");
    window.location.replace("index.html");
}
