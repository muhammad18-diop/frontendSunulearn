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
            body: JSON.stringify({
                email,
                password
            })
        });

        const data = await response.json();

        if (response.ok) {

            alert("Connexion réussie");

            console.log(data);

           
            localStorage.setItem("token", data.token)

        } else {

            alert(data.message || "Erreur de connexion");

        }

    } catch (error) {

        console.log("Erreur :", error);

    }
});