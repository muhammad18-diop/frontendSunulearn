async function afficherCours(){
    const response = await fetch("enadirectA.json")
    const data = await response.json();
    let affiche = document.getElementById("affiche");
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

afficherCours();


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