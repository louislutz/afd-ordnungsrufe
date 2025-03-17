// Funktion zum manuellen Festlegen der Ordnungsrufe
function setOrdnungsrufe() {
    // Hier trägst du die aktuelle Zahl der Ordnungsrufe ein
    const ordnungsrufe = 42; // Beispielwert, den du manuell anpasst

    // Setze die Zahl in das HTML-Element
    document.getElementById('ordnungsrufe-zahl').innerText = ordnungsrufe;
}

// Beim Laden der Seite die Zahl anzeigen
window.onload = setOrdnungsrufe;
