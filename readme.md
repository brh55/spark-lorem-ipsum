# spark-lorem-ipsum
[![Travis branch](https://img.shields.io/travis/brh55/spark-lorem-ipsum/master.svg?style=flat-square)]()

`spark-lorem-ipsum` is a Cisco Spark bot that helps designers generate lorem ipsum text on the fly without the need of an extra tool or browser. With a simple phrase, users can create a `X` amount of paragraphs, words, or sentences of visually pleasing filler text.

![Demo Preview](https://cloud.githubusercontent.com/assets/6020066/21282471/2209db70-c3aa-11e6-893f-3f21af294d59.png)

## Usage
Add your `bot-name` to any spark room and follow the phrase format below to generate desired lorem ipsum:

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
I'm always willing to take usability improvements, features, bug fixes, etc.
