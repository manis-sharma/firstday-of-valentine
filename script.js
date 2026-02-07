function checkAnswer() {
  const ans = document.getElementById("ans");
  if (!ans) return; // important: page safety

  const value = ans.value.trim().toLowerCase();
  const valid = ["cloud restro", "cloud restaurant", "cloud resturant", "cloud"];
  const msg = document.getElementById("msg");

  if (valid.includes(value)) {
    msg.innerText = "Close your eyes for 3 seconds ❤️";
    msg.style.color = "#f273a0";

    setTimeout(() => {
      window.location.href = "https://roseday.manishsharma0.com.np/";
    }, 2000);
  } else {
    msg.innerText = "That’s not our story ❤️";
    msg.style.color = "#e74c3c";
  }
}

// Enter key support (safe)
document.addEventListener("DOMContentLoaded", () => {
  const ans = document.getElementById("ans");
  if (ans) {
    ans.addEventListener("keypress", e => {
      if (e.key === "Enter") checkAnswer();
    });
  }
});

