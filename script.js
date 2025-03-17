// Hier kannst du später die API oder eine andere Methode zum Abrufen der Ordnungsrufe einfügen
function updateOrdnungRufe() {
    const ordnungsrufeZahl = document.getElementById('ordnungsrufe-zahl');
    
    // Beispiel: Setze hier den Wert direkt oder hole die Daten von einer API
    ordnungsrufeZahl.innerText = '42';  // Platzhalter, um die Anzeige zu testen
}

// Alle 10 Sekunden die Zahl aktualisieren (kannst du nach Bedarf anpassen)
setInterval(updateOrdnungRufe, 10000);
