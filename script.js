const themes = [
    {
        background: "#1A1A2E",
        color: "#FFFFFF",
        primaryColor: "#0F3460"
    },
    // other theme objects
];

function func() {
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (email === "tushar@gmail.com" && password === "16072002") {
        window.location.href = "https://tourme16.netlify.app/";
    } else {
        alert("Invalid username or password");
    }
}

const setTheme = (theme) => {
    const root = document.querySelector(":root");
    root.style.setProperty("--background", theme.background);
    root.style.setProperty("--color", theme.color);
    root.style.setProperty("--primary-color", theme.primaryColor);
    root.style.setProperty("--glass-color", theme.glassColor);
};

const displayThemeButtons = () => {
    const btnContainer = document.querySelector(".theme-btn-container");
    themes.forEach((theme) => {
        const div = document.createElement("div");
        div.className = "theme-btn";
        div.style.cssText = `background: ${theme.background}; width: 25px; height: 25px`;
        btnContainer.appendChild(div);
        div.addEventListener("click", () => setTheme(theme));
    });
};

displayThemeButtons();
