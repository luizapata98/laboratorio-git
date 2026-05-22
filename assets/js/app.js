// Lógica principal de la UI
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('mobile-overlay');
    if(sidebar && overlay) {
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    console.log("Laboratorio Git: Interfaz cargada correctamente.");
});
