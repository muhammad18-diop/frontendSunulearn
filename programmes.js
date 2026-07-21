let section = document.getElementById("section");
    let affiche = document.getElementById("affiche");
async function programmes(){
    try {
        let response = await fetch ("programmes.json");
        let programmes = await response.json();
        console.log(programmes);

    

        let suivi = programmes.filter(s => s.distinction == "plus suivi")

        programmes.forEach(programme => {
            affiche.innerHTML += 
             `
        
             
        <div class="bg-white p-4 rounded-xl shadow" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <img 

            src="${programme.image}" 

            class=" h-48 object-cover  rounded-lg">

          <h2 class="text-xl font-bold mt-4">

            ${programme.titre}

          </h2>

          <p class="text-gray-600">
            ${programme.description}
          </p>
          
<a href="${programme.lien}"  class="lien inline-flex font-medium items-center text-fg-brand hover:underline">
        Consulter
        <svg class="w-4 h-4 ms-2 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/></svg>
    </a>
        </div>`;
        
         });
        
    } catch (error) {
        console.log(error);
        
    }
}

async function ecole(){
    
    try {
        let donne = await fetch ("programmes.json");
        let donnejson = await donne.json();
        console.log(donnejson);
        let ecole = donnejson.filter(p => p.categorie === "Grande Ecole");
        console.log(ecole);
       let ecoleAffiche = document.getElementById("ecole");


        ecole.forEach(p => {
            affiche.innerHTML += 
          `
        <div class="bg-white p-4 rounded-xl shadow" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <img 

            src="${p.image}" 

            class=" h-48 object-cover  rounded-lg">

          <h2 class="text-xl font-bold mt-4">
            ${p.titre}
          </h2>

          <p class="text-gray-600">
            ${p.description}
          </p>
          
<a href="${p.lien}"  class="lien inline-flex font-medium items-center text-fg-brand hover:underline">
        Consulter
        <svg class="w-4 h-4 ms-2 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/></svg>
    </a>
        </div>`;

        });
        
        
    } catch (error) {
        console.log(error);
        
    }
}


async function militaire(){
    
    try {
        let donne = await fetch ("programmes.json");
        let donnejson = await donne.json();
        console.log(donnejson);
        let ecole = donnejson.filter(p => p.categorie === "Militaire");
        console.log(ecole);
       let ecoleAffiche = document.getElementById("ecole");


        ecole.forEach(p => {
            affiche.innerHTML += 
          `
        <div class="bg-white p-4 rounded-xl shadow" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <img 

            src="${p.image}" 

            class=" h-48 object-cover  rounded-lg">

          <h2 class="text-xl font-bold mt-4">
            ${p.titre}
          </h2>

          <p class="text-gray-600">
            ${p.description}
          </p>
          
<a href="${p.lien}"  class="lien inline-flex font-medium items-center text-fg-brand hover:underline">
        Consulter
        <svg class="w-4 h-4 ms-2 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/></svg>
    </a>
        </div>`;

        });
        
        
    } catch (error) {
        console.log(error);
        
    }
}



async function Administration(){
    
    try {
        let donne = await fetch ("programmes.json");
        let donnejson = await donne.json();
        console.log(donnejson);
        let ecole = donnejson.filter(p => p.categorie === "Administration");
        console.log(ecole);
       let ecoleAffiche = document.getElementById("ecole");


        ecole.forEach(p => {
            affiche.innerHTML += 
          `
        <div class="bg-white p-4 rounded-xl shadow">
          <img 

            src="${p.image}" 

            class=" h-48 object-cover  rounded-lg">

          <h2 class="text-xl font-bold mt-4">
            ${p.titre}
          </h2>

          <p class="text-gray-600">
            ${p.description}
          </p>
          
<a href="${p.lien}"  class="lien inline-flex font-medium items-center text-fg-brand hover:underline">
        Consulter
        <svg class="w-4 h-4 ms-2 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/></svg>
    </a>
        </div>`;

        });
        
        
    } catch (error) {
        console.log(error);
        
    }
}



/*async function militaire(){
    try {
        let response = await fetch ("programmes.json");
        let data = await response.json();
        let militaire = data.filter(m => m.categorie == "Militaire");
        console.log(militaire);
        
        let affiche2 = document.getElementById("militaire");

       militaire.forEach(m => {
         affiche2.innerHTML += 
         `
         div class="bg-white p-4 rounded-xl shadow">
          <img 

            src="${m.image}" 

            class=" h-48 object-cover  rounded-lg">

          <h2 class="text-xl font-bold mt-4">
            ${m.titre}
          </h2>

          <p class="text-gray-600">
            ${m.description}
          </p>
          
<a href="${m.lien}" class="inline-flex font-medium items-center text-fg-brand hover:underline">
        Consulter
        <svg class="w-4 h-4 ms-2 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/></svg>
    </a>

        </div>`;
       })
    } catch (error) {
        console.log(error);
        
    }
}*/

async function afficherCategorie(categorie){
    affiche.innerHTML = "";
    try {
        let response = await fetch("programmes.json");
        let data = await response.json

        let afficher = document.getElementById ("affiche");
        const resultat = data.filter(p => {
            p.categorie === categorie;
        })

        resultat.forEach(m => {
            affiche.innerHTML += `
            div class="bg-white p-4 rounded-xl shadow">
          <img 

            src="${m.image}" 

            class=" h-48 object-cover  rounded-lg">

          <h2 class="text-xl font-bold mt-4">
            ${m.titre}
          </h2>

          <p class="text-gray-600">
            ${m.description}
          </p>
          
<a href="${m.lien}"  class="lien inline-flex font-medium items-center text-fg-brand hover:underline">
        Consulter
        <svg class="w-4 h-4 ms-2 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/></svg>
    </a>

        </div>
            `
        })
    } catch (error) {
        
    }
}


let ecolepolytech = document.getElementById("ecole-polytech");

ecolepolytech.addEventListener("click", (e) => {
    e.preventDefault();
    affiche.innerHTML = ""
    ecole();
})

let tous = document.getElementById("tous");

tous.addEventListener("click", (e) => {
    e.preventDefault();
    affiche.innerHTML = ""
    programmes();
})



let militaireA = document.getElementById("militaire");

militaireA.addEventListener("click", (e) => {
    e.preventDefault();
    affiche.innerHTML = "";
    militaire();
})

let Administrations = document.getElementById("Administration");

Administrations.addEventListener("click", (e) => {
    e.preventDefault();
    affiche.innerHTML = "";
    Administration();
})
programmes();

document.addEventListener("click", (e) => {
  const token = localStorage.getItem("token");

  const lien = e.target.closest(".lien");

  if (lien) {
    if (!token) {
      e.preventDefault();
      window.location.href = "connexion.html";
    }
  }
});


const btnConnexion = document.getElementById("btnConnexion");
const btnProfile = document.getElementById("btnProfile");
const btnDeconnexion = document.getElementById("btnDeconnexion");
const menuProfile = document.getElementById("menuProfile");

const token = localStorage.getItem("token");
console.log(token);


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

            
            const btnAnnuler = document.querySelectorAll("[id='btnAnnulerDeconnexion']");
            btnAnnuler.forEach(btn => {
                btn.addEventListener("click", () => {
                    logoutModal.hide();
                });
            });

            
            const btnConfirmer = document.getElementById("btnConfirmerDeconnexion");
            btnConfirmer?.addEventListener("click", () => {
                logoutModal.hide();
                localStorage.removeItem("token");
                localStorage.removeItem("nom");
                localStorage.removeItem("email");
                window.location.replace("index.html"); 
            });
        } else {
            
            procederDeconnexionDirecte();
        }
    } else {
        
        procederDeconnexionDirecte();
    }
});


function procederDeconnexionDirecte() {
    localStorage.removeItem("token");
    localStorage.removeItem("nom");
    localStorage.removeItem("email");
    window.location.replace("index.html");
}

document.addEventListener("click", (e) => {
    if (
        btnProfile && menuProfile &&
        !btnProfile.contains(e.target) &&
        !menuProfile.contains(e.target)
    ) {
        menuProfile.classList.add("hidden");
    }
});



let tabprogrammes =  [];

async function programmeTab() {
    try {
        const response = await fetch("programmes.json");
        const data = await response.json();

        let liens = document.querySelectorAll(".lien");
        liens.forEach(lien => {
            lien.addEventListener("click", () => {
                const id = lien.dataset.id;
                const programme = data.find(p => p.id == id);

                if (programme) {
                    // 1. On l'ajoute au tableau
                    tabprogrammes.push(programme);
                    
                    // 2. On sauvegarde le tableau mis à jour dans le localStorage
                    localStorage.setItem("mesProgrammes", JSON.stringify(tabprogrammes));
                    
                    console.log("Sauvegardé :", tabprogrammes);
                }
            });
        });
    } catch (error) {
        console.error(error);
    }
}
programmeTab();

let lienCliquer = document.getElementByclassName("lien")
let tabCours = []

lienCliquer.addEventListener("click", 
    () => {
        async function cliqueCours(){
            const response = await fetch("programmes.json");
            const data = await response.json();
            for (let i = 0; i < data.length; i++){
                tabCours.push(tab[i])
            }
            console.log(tabCours);
            
        }

        cliqueCours();
    }
)