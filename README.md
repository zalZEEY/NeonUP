# Uptimerr

<p>
  <a href="https://www.buymeacoffee.com/Zeey"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=Zeey&button_colour=FFDD00&font_colour=000000&font_family=Arial&outline_colour=000000&coffee_colour=ffffff" /></a>
</p>

```diff
+ Node Version Requirements: v14+
+ Mongoose Pro Cluster Required
```

## About

Uptimer is a open-source, free discord bot that allows you to make your projects online 24/7.

## Supported Sites

- [Glitch](https://glitch.com/)
- [Repl](http://repl.it/)
 
## Discord Server

- [LeoDev](https://discord.gg/q6JzS3hyHB)

## Ussage

==Attention! The Uptimer Bot on LeoDev is closed if you still want to use the bot fork the repository==

> Works for [Glitch](https://glitch.com/)

1. Go to Your Project. Click the share button.

![Glitch First](https://github.com/naveenpoddar/uptimer/blob/main/images/glitch-first.png?raw=true)

2. Copy the url in `Live Site`.

![Glitch Second](https://github.com/naveenpoddar/uptimer/blob/main/images/glitch-second.png?raw=true)

4. Next Join [LeoDev](https://discord.gg/q6JzS3hyHB) Discord Server and go to the uptimer channel.

![Uptimer Channel](https://github.com/naveenpoddar/uptimer/blob/main/images/uptimer.png?raw=true)

5. Now add that url in Uptimer bot, using this command `,add <the url you just copied>`.

> Works for [Repl](http://repl.it/)

1. Go to your project. if your project looks like this and it dont have the browser window so continue the steps, if you already have a browser window in the top right corner skip to `step 3`.

![Repl](https://github.com/naveenpoddar/uptimer/blob/main/images/repl-first.png?raw=true)

2. Now go to your main file in my case it is `index.js`, and on the top of your file paste this code, and it will create an express app.

```js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at Port: ${port}`);
});
```

3. Next Click `Run` button, if already running stop it and `Run` the project, you'll see a browser window appeared in the top right corner.

4. Now copy the url in the browser window.

![Repl Second](https://github.com/naveenpoddar/uptimer/blob/main/images/repl-second.png?raw=true)

4. Next Join [LeoDev](https://discord.gg/q6JzS3hyHB) Discord Server and go to the uptimer channel.

![Uptimer Channel](https://github.com/naveenpoddar/uptimer/blob/main/images/uptimer.png?raw=true)

5. Now add that url in Uptimer bot, using this command `,add <the url you just copied>`.

## Queries?

If you have any questions regarding this project, or you are not able to use this bot, feel free to ask in our discord server [LeoDev](https://discord.gg/q6JzS3hyHB)

## .env File

```env
BOT_TOKEN="your bot token"
MONGO_URI="your mongo-db uri"
```
