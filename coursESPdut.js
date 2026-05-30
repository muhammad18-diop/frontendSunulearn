let affiche = document.getElementById("affiche")

async function AfficherCours(){
    try {
        let response = await fetch("coursESPDUT.json");
        let data = await response.json();
        console.log(data);

        data.forEach(p => {
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
          
<a href="${p.lien}" class="lien inline-flex font-medium items-center text-fg-brand hover:underline"  target="_blank">
        Consulter
        <svg class="w-4 h-4 ms-2 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/></svg>
    </a>
        </div>`;
        })
        
    } catch (error) {
        
    }
}

AfficherCours();


let tout = document.getElementById("tous")

tout.addEventListener("click", () => {

  affiche.innerHTML = "";
  AfficherCours();
})


async function coursMath_S(){
  const response = await fetch ("coursESPDUT.json")
  const data = await response.json();

  const math__S = data.filter(p =>  p.categorie == "Maths")
  math__S.forEach(m => {
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
          
<a href="${m.lien}" class="inline-flex font-medium items-center text-fg-brand hover:underline"  target="_blank">
        Consulter
        <svg class="w-4 h-4 ms-2 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/></svg>
    </a>
        </div>`;
  })
}

let math =  document.getElementById("math")

math.addEventListener("click",() => {
  affiche.innerHTML ="";
  coursMath_S("");
});



async function cours_francais(){
  const response = await fetch ("coursESPDUT.json")
  const data = await response.json();

  const francais = data.filter(p =>  p.categorie == "français")
  francais.forEach(m => {
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
          
<a href="${m.lien}" class="inline-flex font-medium items-center text-fg-brand hover:underline"  target="_blank">
        Consulter
        <svg class="w-4 h-4 ms-2 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/></svg>
    </a>
        </div>`;
  })
}
let  francais = document.getElementById("français")

francais.addEventListener("click", () => {
  affiche.innerHTML = ""
  cours_francais();
})

let pc = document.addEventListener("pc");

async function cours_pc (){
  const response = await fetch ("coursESPDUT.json");
  const donne = await response.json();

  const donnePC = donne.filter(p => p.categorie == "PC");

  donnePC.forEach(c => {
    affiche.innerhtml += 
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
          
<a href="${m.lien}" class="inline-flex font-medium items-center text-fg-brand hover:underline"  target="_blank">
        Consulter
        <svg class="w-4 h-4 ms-2 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/></svg>
    </a>
        </div>`;
  })
}

pc.addEventListener("click", () => {
  affiche.innerHTML = "";
  cours_pc();
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