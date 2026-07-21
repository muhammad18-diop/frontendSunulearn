// Récupérer le token

const token = localStorage.getItem("token");



if(!token){

    window.location.href = "login.html";

}





document.getElementById("userName").textContent += localStorage.getItem("nom");

document.getElementById("userEmail").textContent += localStorage.getItem("email");

document.getElementById("userRole").textContent += localStorage.getItem("role");

// Afficher les informations utilisateur

document.getElementById("infoName").textContent += localStorage.getItem("nom");

document.getElementById("infoEmail").textContent += localStorage.getItem("email");

document.getElementById("role").textContent += localStorage.getItem("role");





// Charger les cours

fetch("courses.json")

.then(response => response.json())

.then(courses => {



    // garder seulement les cours de cet utilisateur

    const myCourses = courses.filter(
        course => course.user_id === user.id
    );



    // statistiques

    document.getElementById("courseCount").textContent =
    myCourses.length;



    const completed = myCourses.filter(
        course => course.progress === 100
    );


    document.getElementById("completedCount").textContent =
    completed.length;



    let total = 0;


    myCourses.forEach(course => {

        total += course.progress;

    });



    let average = 0;


    if(myCourses.length > 0){

        average = Math.round(
            total / myCourses.length
        );

    }



    document.getElementById("progress").textContent =
    average + "%";





    // Affichage des cours


    const container = document.getElementById(
        "coursesContainer"
    );



    myCourses.forEach(course => {


        container.innerHTML += `


        <div class="bg-white dark:bg-gray-800 rounded-xl p-5 shadow">


            <h3 class="text-xl font-bold text-white">
                ${course.title}
            </h3>


            <p class="text-gray-400 mt-2">
                ${course.description}
            </p>



            <div class="mt-4">

                <div class="flex justify-between text-sm">

                    <span class="text-gray-400">
                    Progression
                    </span>


                    <span class="text-blue-500">
                    ${course.progress}%
                    </span>


                </div>



                <div class="w-full bg-gray-700 rounded-full h-2 mt-2">


                    <div 
                    class="bg-blue-600 h-2 rounded-full"
                    style="width:${course.progress}%">
                    </div>


                </div>


            </div>


        </div>


        `;


    });



});


document.addEventListener("DOMContentLoaded", () => {
      const openBtn = document.getElementById("open-sidebar-btn");
      const closeBtn = document.getElementById("close-sidebar-btn");
      const sidebar = document.getElementById("sidebar");
      const overlay = document.getElementById("sidebar-overlay");

      if (openBtn && closeBtn && sidebar && overlay) {
        openBtn.addEventListener("click", () => {
          sidebar.classList.remove("-translate-x-full");
          overlay.classList.remove("hidden");
        });
        closeBtn.addEventListener("click", () => {
          sidebar.classList.add("-translate-x-full");
          overlay.classList.add("hidden");});overlay.addEventListener("click", () => {sidebar.classList.add("-translate-x-full");overlay.classList.add("hidden");});}});