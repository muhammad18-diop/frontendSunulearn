document
  .getElementById("notificationForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    try {
      const response = await fetch(
        "https://backendsunulearn-3.onrender.com/api/admin/send-notification",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            subject,
            message,
          }),
        }
      );

      const data = await response.json();
const result = document.getElementById("result");

result.classList.remove("hidden");

result.className =
    "mt-6 p-4 rounded-lg bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";

result.textContent = data.message;
    } catch (error) {
      console.error(error);
    }
  });