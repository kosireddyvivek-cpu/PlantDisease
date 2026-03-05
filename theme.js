// Global Theme Engine

function applyTheme(isLight) {
    // Elements that act as theme toggles with an icon inside
    const icons = document.querySelectorAll('.theme-icon-js');

    if (isLight) {
        document.body.classList.add('light-theme');
        icons.forEach(icon => {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        });
    } else {
        document.body.classList.remove('light-theme');
        icons.forEach(icon => {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        });
    }
}

function toggleGlobalTheme() {
    const isLight = !document.body.classList.contains('light-theme');
    localStorage.setItem('plant_ai_theme', isLight ? 'light' : 'dark');
    applyTheme(isLight);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('plant_ai_theme');
    if (savedTheme === 'light') {
        applyTheme(true);
    } else {
        applyTheme(false);
    }

    // Attach event listener to any toggle buttons
    const toggleBtns = document.querySelectorAll('.global-theme-toggle, #themeToggleBtn');
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', toggleGlobalTheme);
    });
});
