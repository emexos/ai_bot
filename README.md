# TwoBlade Chatbot

A Node.js-based bot for [TwoBlade](https://twoblade.com) that logs in automatically, connects to the WebSocket, and reacts to messages.

## Features

* Automatic login with cookie handling
* Connection to the TwoBlade WebSocket
* Processing of incoming messages
* Extendable via custom AI logic (`./ai.js`)

## Prerequisites

### 1. Install Node.js

If you don't have Node.js installed:

* Windows/macOS/Linux:
  Visit [https://nodejs.org/](https://nodejs.org/) and download the LTS version.

* Verify installation in the terminal:

  ```bash
  node -v
  npm -v
  ```

### 2. Install dependencies

In the project directory, run:

```bash
npm install
```

## Configuration (.env)

Create a file named `.env` in the project root with the following content:

```
CF_CLEARANCE=your_cf_token
TB_USERNAME=your_twoblade_account_username
TB_PASSWORD=your_twoblade_account_password
GEMINI_API_KEY=your_api_key
```

### How to get the values

* `CF_CLEARANCE`:
  This cookie is obtained when logging into [twoblade.com](https://twoblade.com).
  Open the browser dev tools (F12), go to "Application" > "Cookies" and copy the value for `cf_clearance`.

* `TB_USERNAME` & `TB_PASSWORD`:
  Your TwoBlade account login credentials.

* `GEMINI_API_KEY`:
  Get it from [Google AI](https://makersuite.google.com/app) after creating a project.

## Start

The `index.js` file is already included. To start the bot, run:

```bash
node index.js
```

## Project Structure

```
.
├── .env
├── bot.js
├── ai.js         # your custom AI logic
├── index.js
├── package.json
```

