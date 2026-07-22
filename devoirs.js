
// Base de données des ressources disponibles sur votre site
const resources = [
  // --- SECTION QUIZ ---
  { id: 1, type: 'quiz', concours: 'Administration', title: 'Quiz Culture Générale ENA Cycle B', desc: 'Testez vos connaissances en culture générale et préparer le concours.', count: '30 Questions', badgeColor: 'blue', lien: "quizENAB.html" },
  { id: 2, type: 'quiz', concours: 'Administration', title: 'Quiz Culture Générale CJF Greffes', desc: 'Testez vos connaissances en culture générale et préparer le concours.', count: '20 Questions', badgeColor: 'emerald', lien: "quizGreffe.html" },
  { id: 3, type: 'quiz', concours: 'Administration', title: 'Quiz Économie & Finances Publiques', desc: 'Quiz intensif sur les mécanismes financiers et économiques des administrations.', count: '25 Questions', badgeColor: 'purple', lien: "quizECO.html" },
  { id: 4, type: 'quiz', concours: 'Militaire', title: 'Quiz Procédure Pénale de Base', desc: 'Évaluez votre maîtrise du code de procédure pénale pour le concours de Police.', count: '15 Questions', badgeColor: 'amber', lien: "quizPenal.html" },

  // --- SECTION EXERCICES CORRIGÉS ---
  { id: 5, type: 'exercices', concours: 'Administration', title: 'Sujet Corrigé : Cas Pratique de Droit Civil', desc: 'Méthodologie détaillée et correction complète rédigée par des professionnels du droit.', count: 'PDF + Conseils', badgeColor: 'blue' },
  { id: 6, type: 'exercices', concours: 'Administrations', title: 'Note de Synthèse Méthodique', desc: 'Dossier documentaire complet avec sa proposition de note rédigée étape par étape.', count: 'Exercice guidé', badgeColor: 'purple' },
  { id: 7, type: 'exercices', concours: 'Militaire', title: 'Exercices Corrigés de Législation Douanière', desc: 'Série de cas pratiques résolus portant sur les régimes douaniers essentiels.', count: '5 Exercices', badgeColor: 'red' },

  // --- SECTION EXAMENS BLANCS ---
  { id: 8, type: 'examens', concours: 'Militaire', title: 'Examen Blanc : Épreuve de Dissertation', desc: 'Sujet officiel type dans les conditions réelles de l\'examen avec grille de notation.', count: 'Durée : 4h00', badgeColor: 'emerald' },
  { id: 9, type: 'examens', concours: 'Militaire', title: 'Session Blanche : Commissaire / Officier', desc: 'Épreuve complète mêlant droit pénal et culture de sécurité publique.', count: 'Durée : 3h30', badgeColor: 'amber' },
  { id: 10, type: 'examens', concours: 'Militaire', title: 'Concours Blanc : Contrôleur des Douanes', desc: 'Sujet de composition portant sur l\'économie mondiale et nationale.', count: 'Durée : 4h00', badgeColor: 'red' }
];

let currentTab = 'quiz';
let currentConcours = 'all';


function renderCards() {
  const grid = document.getElementById('cards-grid');
  grid.innerHTML = '';

  const filtered = resources.filter(item => {
    const matchTab = item.type === currentTab;
    const matchConcours = currentConcours === 'all' || item.concours === currentConcours;
    return matchTab && matchConcours;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-12 bg-white rounded-2xl border border-slate-200 shadow-sm">
        <p class="text-slate-400 text-sm">Aucun contenu trouvé pour la catégorie "${currentConcours}" sous cet onglet.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    
    const colors = {
      blue: 'bg-blue-50 text-blue-700 border-blue-200',
      emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      purple: 'bg-purple-50 text-purple-700 border-purple-200',
      amber: 'bg-amber-50 text-amber-700 border-amber-200',
      red: 'bg-red-50 text-red-700 border-red-200'
    };
    const activeColor = colors[item.badgeColor] || 'bg-slate-100 text-slate-700 border-slate-200';

    let btnText = 'Démarrer le Quiz';
    if (item.type === 'exercices') btnText = 'Voir le Corrigé';
    if (item.type === 'examens') btnText = 'Télécharger le Sujet';

    // Les cartes sont blanches avec des boutons sombres de style "Dark Flowbite"
    grid.innerHTML += `
      <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all duration-200">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="text-xs px-2.5 py-1 rounded-full font-bold border ${activeColor}">
              ${item.concours}
            </span>
            <span class="text-xs text-slate-400 font-medium">${item.count}</span>
          </div>
          <h3 class="text-lg font-bold text-slate-900 mb-2">${item.title}</h3>
          <p class="text-sm text-slate-600 leading-relaxed mb-6">${item.desc}</p>
        </div>
        <a href="${item.lien}" class="w-full text-center py-3 bg-slate-900 hover: text-slate-100 hover:text-white rounded-xl text-sm font-semibold transition-all duration-150 shadow-sm border border-slate-800">
          ${btnText}
        </a>
      </div>
    `;
  });
}

// Gestion du basculement des onglets
function switchTab(tabName) {
  currentTab = tabName;
  
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-500/20');
    btn.classList.add('text-slate-400', 'hover:bg-slate-800', 'hover:text-white');
  });

  const activeTab = document.getElementById(`tab-${tabName}`);
  activeTab.classList.remove('text-slate-400', 'hover:bg-slate-800', 'hover:text-white');
  activeTab.classList.add('bg-blue-600', 'text-white', 'shadow-lg', );

  renderCards();
}

// Gestion du filtrage par concours
function filterConcours(concoursName) {
  currentConcours = concoursName;
  
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('bg-slate-900', 'text-white', 'border-slate-800');
    btn.classList.add('bg-white', 'text-slate-700', 'border-slate-200', 'hover:bg-slate-900', 'hover:text-white', 'hover:border-slate-800');});
    const target = event.currentTarget;target.classList.remove('bg-white', 'text-slate-700', 'border-slate-200', 'hover:bg-slate-900', 'hover:text-white', 'hover:border-slate-800');target.classList.add('bg-slate-900', 'text-white', 'border-slate-800');renderCards();}
    function startActivity(type, id) {alert("Chargement de la ressource [${type}] - ID #${id}");}
    document.addEventListener('DOMContentLoaded', () => {renderCards();});




    
document.addEventListener("click", (e) => {
    const lien = e.target.closest(".lien");
    if (!lien) return;

    const token = localStorage.getItem("token");
    if (!token) {
        e.preventDefault();
        window.location.href = "connexion.html";
    }
});

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


document.addEventListener("click", (e) => {
    if (btnProfile && menuProfile && !btnProfile.contains(e.target) && !menuProfile.contains(e.target)) {
        menuProfile.classList.add("hidden");
    }
});


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

            
            const boutonsAnnuler = document.querySelectorAll("[id='btnAnnulerDeconnexion']");
            boutonsAnnuler.forEach(btn => {
                btn.addEventListener("click", () => logoutModal.hide());
            });

            
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



const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {

    e.preventDefault();


    const nom = document.getElementById("nom").value;
    const titre = document.getElementById("titre").value;
    const fichier = document.getElementById("fichier").files[0];
    const commentaire = document.getElementById("commentaire").value;


    // Vérification fichier
    if (!fichier) {
        alert("Veuillez sélectionner un fichier");
        return;
    }


    // Création FormData
    const formData = new FormData();

    formData.append("nom", nom);
    formData.append("titre", titre);
    formData.append("commentaire", commentaire);

    // Le nom doit correspondre au multer .single("devoirFile")
    formData.append("devoirFile", fichier);



    try {

        const response = await fetch(
            "https://backend-develop-vp3p.onrender.com/api/devoirs/upload",
            {
                method: "POST",
                body: formData
            }
        );


        const data = await response.json();


        if (data.success) {

            alert("Devoir envoyé avec succès");

            console.log(data.devoir);

            form.reset();

        } else {

            alert(data.message);

        }


    } catch (error) {

        console.error("Erreur upload :", error);

        alert("Erreur serveur");

    }

});