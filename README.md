# Mastermind

This project was created as a challenge from a company when I applied there. It aims to provide a faithful experience of the game Mastermind with customizable settings such as code sizes, amount of colors to choose from, and amount of guesses before the game ends. These settings can provide an easier or harder time playing.

It was a blast to make, needing to dive deep into the Composition API of Vue.js and the company normally providing a week to finish the project I set out immediately. In the end it took me two days over the weekend to finish building.

## Project Setup
```sh
npm install
```

### Compile and Minify
```sh
npm run build
```

## Running the program

In case you are using Laravel Herd, use the following commands to generate a new local URL to the Vite-compiled version of the project:
```sh
cd dist
herd link Mastermind
```
In case you run any other local hosting software, make sure to run the `dist` version of the index.

I've tried to make it work locally without a localhost, running directly off of the `index.html` but due to the Router it would redirect to the root of the system. This project will have to be run on a server, whether locally or otherwise.
