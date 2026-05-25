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
          
<a href="${programme.lien}" class="inline-flex font-medium items-center text-fg-brand hover:underline">
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
          
<a href="${p.lien}" class="inline-flex font-medium items-center text-fg-brand hover:underline">
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
          
<a href="${p.lien}" class="inline-flex font-medium items-center text-fg-brand hover:underline">
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
          
<a href="${p.lien}" class="inline-flex font-medium items-center text-fg-brand hover:underline">
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
          
<a href="${m.lien}" class="inline-flex font-medium items-center text-fg-brand hover:underline">
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




