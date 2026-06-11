async function cours() {
    try {
        const response = await fetch("cours.json");
        const data = await response.json();
        console.log(data);
        let affiche = document.getElementById("cours");
        data.forEach(cour => {
            affiche.innerHTML += 
            `
        <div class="bg-white p-4 rounded-xl shadow" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <img 

            src="${cour.image}" 

            class=" h-48 object-cover  rounded-lg">

          <h2 class="text-xl font-bold mt-4">

            ${cour.titre}

          </h2>

          <p class="text-gray-600">
            ${cour.description}
          </p>
          
<a href="${cour.lien}" class="inline-flex font-medium items-center text-fg-brand hover:underline">
        Consulter
        <svg class="w-4 h-4 ms-2 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/></svg>
    </a>



        </div>

      `;
        });
        
    } catch (error) {
        
    }
}

cours();


const btnProfile = document.getElementById("btnProfile");
const menuProfile = document.getElementById("menuProfile");

btnProfile.addEventListener("click", () => {
    menuProfile.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
    if (!btnProfile.contains(e.target) && !menuProfile.contains(e.target)) {
        menuProfile.classList.add("hidden");
    }
});


const token = localStorage.getItem("token");

const btnConnexion = document.getElementById("btnConnexion");
const btnProfile = document.getElementById("btnProfile");
const btnDeconnexion = document.getElementById("btnDeconnexion");
const menuProfile = document.getElementById("menuProfile");

if (token) {

    btnConnexion.classList.add("hidden");
    btnProfile.classList.remove("hidden");

    const nom = localStorage.getItem("nom") || "Utilisateur";
    const email = localStorage.getItem("email") || "";

    document.getElementById("nomUtilisateur").textContent = nom;
    document.getElementById("profileNom").textContent = nom;
    document.getElementById("profileEmail").textContent = email;

    btnDeconnexion.disabled = false;
    btnDeconnexion.classList.remove(
        "text-gray-400",
        "cursor-not-allowed"
    );

    btnDeconnexion.classList.add(
        "text-red-600",
        "hover:bg-gray-100"
    );
}

btnProfile?.addEventListener("click", () => {
    menuProfile.classList.toggle("hidden");
});

btnDeconnexion?.addEventListener("click", () => {

    localStorage.removeItem("token");
    localStorage.removeItem("nom");
    localStorage.removeItem("email");

    window.location.href = "connexion.html";
});

document.addEventListener("click", (e) => {

    if (
        btnProfile &&
        !btnProfile.contains(e.target) &&
        !menuProfile.contains(e.target)
    ) {
        menuProfile.classList.add("hidden");
    }

});


