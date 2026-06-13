const formAjout = document.getElementById("form-ajout-cours");

formAjout?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const titre = document.getElementById("titre").value.trim();
    const categorie = document.getElementById("categorie").value;
    const description = document.getElementById("description").value.trim();

    const imageFile = document.getElementById("imageFile").files[0];
    const pdfFile = document.getElementById("pdfFile").files[0];

    if (!pdfFile) {
        alert("PDF obligatoire");
        return;
    }

    const formData = new FormData();

    formData.append("titre", titre);
    formData.append("categorie", categorie);
    formData.append("description", description);
    formData.append("pdfFile", pdfFile);

    if (imageFile) {
        formData.append("imageFile", imageFile);
    }

    try {
        const response = await fetch("http://localhost:3000/api/courses/add", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: formData
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Erreur serveur");
        }

        alert("Cours ajouté avec succès !");
        formAjout.reset();

    } catch (error) {
        console.error("Erreur upload:", error);
        alert(error.message);
    }
});