async function loadProfile() {
  const token = localStorage.getItem("token");

  const res = await fetch("https://backendsunulearn-3.onrender.com/api/user/me", {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  const user = await res.json();

  document.getElementById("name").textContent = localStorage.getItem("nom");
  document.getElementById("email").textContent = localStorage.getItem("email");
  document.getElementById("role").textContent = localStorage.getItem("role");

  document.getElementById("avatar").src =
    user.avatar || "https://i.pravatar.cc/150";

  document.getElementById("editName").value = user.name || "";
  document.getElementById("editEmail").value = user.email || "";
  document.getElementById("editAvatar").value = user.avatar || "";
}

loadProfile();



document.getElementById("editForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const token = localStorage.getItem("token");

  const data = {
    name: document.getElementById("editName").value,
    email: document.getElementById("editEmail").value,
    avatar: document.getElementById("editAvatar").value
  };

  const res = await fetch("https://backendsunulearn-3.onrender.com/api/user/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    alert("Erreur lors de la mise à jour");
    return;
  }

  const result = await res.json();
  console.log("Profil mis à jour :", result);

  
  document.getElementById("name").textContent = result.user.name;
  document.getElementById("email").textContent = result.user.email;
  document.getElementById("avatar").src =
    result.user.avatar || "https://i.pravatar.cc/150";

  
  location.reload();
});



document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("token");
  localStorage.removeItem("nom");
  localStorage.removeItem("email");
  localStorage.removeItem("role");

  window.location.replace("index.html");
});