const form = document.getElementById("form")

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const nom = document.getElementById("nom").value.trim()
    const email = document.getElementById("email").value.trim()
    const mdp = document.getElementById("password").value.trim()

   
    if (!nom || !email || !mdp) {
        alert("Veuillez remplir tous les champs")
        return
    }

    if (mdp.length < 6) {
        alert("Le mot de passe doit contenir au moins 6 caractères")
        return
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
        })

        const data = await response.json()

        if (response.ok) {
            alert("Inscription réussie !")
            form.reset()
            window.location.href = "connexion.html" 
        } else {
            alert(data.message || "Une erreur est survenue")
        }

    } catch (error) {
        console.error("Erreur :", error)
        alert("Erreur serveur, veuillez réessayer plus tard")
    }
})