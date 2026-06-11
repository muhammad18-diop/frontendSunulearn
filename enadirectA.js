async function afficherCours(){
    const response = await fetch("enadirectA.json")
    const data = await response.json();
    let affiche = document.getElementById("affiche");
    affiche.innerHTML = "";
    data.forEach(m => {
        affiche.innerHTML += 
         `
        <div class="bg-white p-4 rounded-xl shadow" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <img 

            src="${m.image}" 

            class=" h-48 object-cover  rounded-lg">

          <h2 class="text-xl font-bold mt-4">

            ${m.titre}

          </h2>

          <p class="text-gray-600">
            ${m.description}
          </p>
          
<a href="${m.lien}" class="lien inline-flex font-medium items-center text-fg-brand hover:underline"  target="_blank" >
        Consulter
        <svg class="w-4 h-4 ms-2 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/></svg>
    </a>
        </div>`;
    })
}

async function CultureGenerale(){
  const response = await fetch("enadirectA.json");
  const data = await response.json();
  
  const culure = data.filter(m => m.distinction === "plus suivi");
  console.log(culure);
let affiche = document.getElementById("affiche");
affiche.innerHTML = "";
  culure.forEach(p => {
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
          
<a href="${p.lien}" class="lien inline-flex font-medium items-center text-fg-brand hover:underline"  target="_blank" >
        Consulter
        <svg class="w-4 h-4 ms-2 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/></svg>
    </a>
        </div>`;
  })
}

async function coursDroit(){
  const response = await fetch("enadirectA.json");
  const data = await response.json();
  const droit = data.filter(p => p.distinction === "droit");
  console.log(droit);
let affiche = document.getElementById("affiche");
affiche.innerHTML = "";
  droit.forEach(m => {
    affiche.innerHTML +=
       `
        <div class="bg-white p-4 rounded-xl shadow" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <img 

            src="${m.image}" 

            class=" h-48 object-cover  rounded-lg">

          <h2 class="text-xl font-bold mt-4">

            ${m.titre}

          </h2>

          <p class="text-gray-600">
            ${m.description}
          </p>
          
<a href="${m.lien}" class="lien inline-flex font-medium items-center text-fg-brand hover:underline"  target="_blank" >
        Consulter
        <svg class="w-4 h-4 ms-2 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/></svg>
    </a>
        </div>`;
  })
  
}

async function coursEconomie(){
  const response = await fetch("enadirectA.json");
  const data = await response.json();

  const economie = data.filter(p => p.distinction === "economie");

  const affiche = document.getElementById("affiche");
  affiche.innerHTML = "";

  economie.forEach(m => {
    affiche.innerHTML += 
    `
        <div class="bg-white p-4 rounded-xl shadow" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <img 

            src="${m.image}" 

            class=" h-48 object-cover  rounded-lg">

          <h2 class="text-xl font-bold mt-4">

            ${m.titre}

          </h2>

          <p class="text-gray-600">
            ${m.description}
          </p>
          
<a href="${m.lien}" class="lien inline-flex font-medium items-center text-fg-brand hover:underline"  target="_blank" >
        Consulter
        <svg class="w-4 h-4 ms-2 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/></svg>
    </a>
        </div>`;
  })
}

async function GestionPublique(){
  const response = await fetch("enadirectA.json");
  const data = await response.json();

  const gestion = data.filter(p => p.distinction === "gestionPublique");

  let affiche = document.getElementById("affiche");
  affiche.innerHTML = "";

  gestion.forEach(m => {
    affiche.innerHTML += 
    `
        <div class="bg-white p-4 rounded-xl shadow" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <img 

            src="${m.image}" 

            class=" h-48 object-cover  rounded-lg">

          <h2 class="text-xl font-bold mt-4">

            ${m.titre}

          </h2>

          <p class="text-gray-600">
            ${m.description}
          </p>
          
<a href="${m.lien}" class="lien inline-flex font-medium items-center text-fg-brand hover:underline"  target="_blank" >
        Consulter
        <svg class="w-4 h-4 ms-2 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/></svg>
    </a>
        </div>`;
  })
}

afficherCours();
//CultureGenerale();

const btncultureGenerale = document.getElementById("CultureG");
console.log(btncultureGenerale);

btncultureGenerale.addEventListener("click", () => {
 CultureGenerale();

})

const tous  = document.getElementById("tous");

tous.addEventListener("click", () => {
  afficherCours();
});

const droit = document.getElementById("droit");
droit.addEventListener("click", () => {
  coursDroit();
})

const economie = document.getElementById("economie");

economie.addEventListener("click", () => {
  coursEconomie();
})

const gestion = document.getElementById("gestion");

gestion.addEventListener("click", () => {
  GestionPublique();
})

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