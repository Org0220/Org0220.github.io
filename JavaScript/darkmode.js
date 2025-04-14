//Doesnt work like this

document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("dark-mode");
    document.getElementById("dark-mode-toggle").innerText = "☀️";
  });

  document.getElementById("dark-mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const toggleBtn = document.getElementById("dark-mode-toggle");
    const taskbar = document.getElementById("taskbar");
    const isDarkModeOn = document.body.classList.contains("dark-mode");

    toggleBtn.innerText = isDarkModeOn ? "☀️" : "🌓";
    
    if (isDarkModeOn) {
      taskbar.classList.remove("light-mode");
    } else {
      taskbar.classList.add("light-mode");
    }
  });