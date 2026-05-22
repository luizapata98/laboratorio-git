// Utilidades compartidas del proyecto
const Logger = {
    info: (msg) => console.log(`[INFO] ${msg}`),
    error: (msg) => console.error(`[ERROR] ${msg}`),
    warn: (msg) => console.warn(`[WARN] ${msg}`)
};

const Formatter = {
    capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1)
};
