const form = document.getElementById("form-connexion");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("https://backendsunulearn-3.onrender.com/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            
            localStorage.setItem("token", data.token);
            localStorage.setItem("nom", data.user.name);
            localStorage.setItem("email", data.user.email);

            
            const $modalElement = document.getElementById('successModal');
            
            if ($modalElement) {
                let modal;
                if (typeof Modal !== 'undefined') {
                    modal = new Modal($modalElement);
                } else if (typeof flowbite !== 'undefined' && flowbite.Modal) {
                    modal = new flowbite.Modal($modalElement);
                }

                if (modal) {
                    modal.show();

                    const btnContinuer = document.getElementById("btnContinuerModal");
                    btnContinuer?.addEventListener("click", () => {
                        modal.hide();
                        window.location.replace("index.html"); 
                    });
                } else {
                    window.location.replace("index.html");
                }
            } else {
                alert("Connexion réussie");
                window.location.replace("index.html");
            }
        } else {
            alert(data.message);
        }

    } catch (error) {
        console.log("Erreur :", error);
    }
});
