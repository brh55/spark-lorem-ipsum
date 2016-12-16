# spark-lorem-ipsum
[![Travis branch](https://img.shields.io/travis/brh55/spark-lorem-ipsum/master.svg?style=flat-square)]()

`spark-lorem-ipsum` is a Cisco Spark bot that helps designers generate lorem ipsum text on the fly without the need of an extra tool or browser.

## Usage
Add `bot-name` to your room and follow the phrase format below to generate desired lorem ipsum:

> `<generate|make|create> <qty> <sentences|paragraphs|words>`

**Example:**

> @lorem-ipsum make 20 sentences  
> @lorem-ipsum create 8 paragraphs    
> @lorem-ipsum generate 25 words

## Deployment
1. Cisco developer account
2. Create an app/bot to be used for your team's domain (reference the [bot-icon.png](https://raw.githubusercontent.com/brh55/spark-lorem-ipsum/master/bot-icon.png) url for the bot's icon for convenience).
3. Copy the example.env to your own .env file, and define the variables
    `$ cp example.env .env`
4. After a successful URL pointing to your server, start the server
    `$ npm start`

### Quick Deploy to Heroku
[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

*Note: You must login before it will direct you to the quick deploy page.*

## Contribution
This is a fairly small scope project, but I am always willing to take usability improvements, bug fixes, etc.
