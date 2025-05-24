# TwoBlade Chatbot

Ein Node.js-basierter Bot für [TwoBlade](https://twoblade.com), der sich automatisch einloggt, mit dem WebSocket verbindet und auf Nachrichten reagieren kann.

## Features

* Automatisches Login mit Cookie-Handling
* Verbindung zum TwoBlade WebSocket
* Verarbeitung eingehender Nachrichten
* Erweiterbar durch eigene KI-Logik (`./ai.js`)

## Voraussetzungen

### 1. Node.js installieren

Falls Node.js noch nicht installiert ist:

* Windows/macOS/Linux:
  Besuche [https://nodejs.org/](https://nodejs.org/) und lade die LTS-Version herunter.

* Nach der Installation im Terminal prüfen:

  ```bash
  node -v
  npm -v
  ```

### 2. Abhängigkeiten installieren

Im Projektverzeichnis im Terminal ausführen:

```bash
npm install
```

## Konfiguration (.env)

Erstelle eine Datei namens `.env` im Projektverzeichnis mit folgendem Inhalt:

```
CF_CLEARANCE=your_cf_token
TB_USERNAME=your_twoblade_account_username
TB_PASSWORD=your_twoblade_account_password
GEMINI_API_KEY=your_api_key
```

### Woher bekommt man die Werte?

* `CF_CLEARANCE`:
  Diesen Cookie erhält man beim Login auf [twoblade.com](https://twoblade.com).
  In den Entwicklertools des Browsers (F12) unter "Anwendung" > "Cookies" den `cf_clearance`-Wert kopieren.

* `TB_USERNAME` & `TB_PASSWORD`:
  Die Login-Daten für das TwoBlade-Konto.

* `GEMINI_API_KEY`:
  Erhältlich über [Google AI](https://makersuite.google.com/app) nach Erstellung eines Projekts.

## Start

Die Datei `index.js` ist bereits enthalten. Um den Bot zu starten:

```bash
node index.js
```

## Projektstruktur

```
.
├── .env
├── bot.js
├── ai.js         # eigene Logik für KI-Antworten
├── index.js
├── package.json
```

## Lizenz

MIT-Lizenz
