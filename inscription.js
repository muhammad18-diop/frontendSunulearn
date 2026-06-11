const form = document.getElementById("form");


function declencherModalErreur(messageTexte) {
    const $errorModalElement = document.getElementById('errorSignupModal');
    const errorMessageElement = document.getElementById("errorSignupMessage");
    
    if ($errorModalElement && errorMessageElement) {
        errorMessageElement.textContent = messageTexte;
        
        let errorModal;
        if (typeof Modal !== 'undefined') {
            errorModal = new Modal($errorModalElement);
        } else if (typeof flowbite !== 'undefined' && flowbite.Modal) {
            errorModal = new flowbite.Modal($errorModalElement);
        }

        if (errorModal) {
            errorModal.show();
            
            const btnFermer = document.getElementById("btnFermerErrorSignup");
            btnFermer?.addEventListener("click", () => {
                errorModal.hide();
            });
        } else {
            alert(messageTexte);
        }
    } else {
        alert(messageTexte);
    }
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const mdp = document.getElementById("password").value.trim();

    if (!nom || !email || !mdp) {
        declencherModalErreur("Veuillez remplir tous les champs");
        return;
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        declencherModalErreur("L'adresse e-mail saisie n'est pas valide");
        return;
    }

    if (mdp.length < 6) {
        declencherModalErreur("Le mot de passe doit contenir au moins 6 caractères");
        return;
    }

    try {
        const response = await fetch("https://backendsunulearn-3.onrender.com/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: nom,
                email: email,
                password: mdp
            }),
        });

        const data = await response.json();

        if (response.ok) {
            form.reset();

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
                        window.location.href = "connexion.html";
                    });
                } else {
                    window.location.href = "connexion.html";
                }
            } else {
                window.location.href = "connexion.html";
            }

        } else {
    
            declencherModalErreur(data.message || "Une erreur est survenue lors de l'inscription");
        }

    } catch (error) {
        console.error("Erreur :", error);
        declencherModalErreur("Erreur serveur, veuillez réessayer plus tard");
    }
});
