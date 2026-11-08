const toggleBtn = document.getElementById('theme-toggle-btn');
const projectCard = document.querySelector('.client-project-card');

let isDarkMode = true;

toggleBtn.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        projectCard.style.background = '#1e293b';
        projectCard.style.color = '#f8fafc';
        toggleBtn.textContent = '🌙 Dark Mode';
        toggleBtn.style.background = '#2563eb';
    } else {
        projectCard.style.background = '#ffffff';
        projectCard.style.color = '#0f172a';
        toggleBtn.textContent = '☀️ Light Mode';
        toggleBtn.style.background = '#e2e8f0';
        toggleBtn.style.color = '#0f172a';
    }
});