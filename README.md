# Discord Bot Base

This project is a clean Discord bot base, created using Discord.js v13.6.0. It features a Talent Perm system.

## Features

- **Talent Perm System:** If you enter "OWNER" in `permissions`, only the bot owner can use it, and if you enter individual ids, the specified id, server administrator, and bot owners can use it.
- **Channel Restrictions:** In `_channels.js`, you can restrict commands to specific channels by entering the channel id. If you do not enter any id, the commands will be available in all channels.
- **Custom Commands:** In `talentPerms.json`, you can add commands like `.vip`, `.elite`.

## Command Template

```js
module.exports = {
    name: "",
    aliases: [],
    description: "",
    permissions: [],
    category: [],
    active: true,

    /**
    * @param {Client} client 
    */
   
    onLoad: function (client) {

    },

    /**
    * @param {Client} client 
    * @param {Message} message 
    * @param {Array<String>} args 
    */

    onRequest: async function (client, message, args) {
    
    }
};
```

# Getting Started
In this section, you will find the necessary steps to run the project on your local machine.

## Prerequisites
- Node.js
- npm
- A Discord Bot

# Installation
1. Clone the project:
   ```sh
   git clone https://github.com/kedyjs/discord.js-v13-main
    ```
2. Navigate to the project directory:
   ```sh
   cd <project-directory>
    ```
3. Install the required npm packages.
  ```sh
  npm install
  ```
4. Start the bot
   ```sh
   npm start
   ```
