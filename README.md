# FOSS Club, STIST
This is a game to be played by the participants at the inaugural ceremony of the [FOSS Club](https://fossunited.org/clubs) chapter at [STIST](https://www.stisttvm.edu.in/). It intends to familiarize participants with the idea of open source software & how to get started in the world of FOSS.
> written with [Next.js](https://nextjs.org) & hosted on [Vercel](https://vercel.com). have a look at the [deployment](https://stist.vercel.app)

## Table of Contents
* [How to play](#how-to-play)
    * [The setup](#the-setup)
    * [The game](#the-game)
* [Setup Guide](#setup-guide)
    * [Prerequisites](#prerequisites)
    * [Instructions](#instructions)
* [Contributing](#contributing)

## How to play
You might be wondering how on earth can someone *play* a game with this? Well, the idea is simple: you contribute. So then you might be thinking oh, so this is like those hackathons where we have to add features. But no, this is beginner friendly, so all you need to add are recipes! The point to note here is that the whole website renders it's contents from a JSON file, which is beginner friendly. So, adding dishes to this file would make them available in the website.

### The setup
Since this would take place during the inaugural ceremony, there'll obviously be the speaker (in this case, myself) and a lot of (hopefully) interested people in the audience. There will be 2 people in the audience who are actually prepped, whose roles will be to guide teams from the audience. Each of them will have a laptop/PC which will be checked out to a branch in this repo. Of course, depending on the number of teams, there can be more than 2 people.

### The game
Once the audience gathers, they'll be briefed about FOSS & contributing to open source. Then, they'll be give a tour on what exactly happens behind the scenes in the game. Afterwards, the game will proceed as follows:
* The speaker asks the audience to split themselves into teams & choose a side.
* The guide for the team will delete the existing 4 dishes from their branch.
* Without the help of the guide, the team will have to figure out how data is mapped from the JSON file to the site.
* Each team tries to add as much items to the list as possible. They'll aim for both quality & quantity.
* Once finishedd, the guide will open a PR to merge the changes into main.
* The judge will merge the better PR & deploy to production.

The full JSON file of the [live site](https://stist.vercel.app) is [`app/api/db.json`](https://github.com/vishalkrishnads/stist/tree/main/app/api/db.json). Here's a breakdown of the different fields in the file:

```json
{
    "contributor": "<team name>", // the name of the team adding the dishes
    "dishes": [
        // dish 1
        {
             "name": "<name of the dish>", // name to be displayed in the UI
             "image": "<url>", // url pointing to the image in the network
             "ingredients": [
                 "item 1",
                 "item 2",
                 // ...
                 "item n"
              ],
              "recipe": [
                 "step 1",
                 "step 2",
                 // ...
                 "step n"
              ]
        },
        // dish 2
        {
             "name": "<name of the dish>", // name to be displayed in the UI
             "image": "<url>", // url pointing to the image in the network
             "ingredients": [
                 "item 1",
                 "item 2",
                 // ...
                 "item n"
              ],
              "recipe": [
                 "step 1",
                 "step 2",
                 // ...
                 "step n"
              ]
        },
        // ...
        // dish n
        {
             "name": "<name of the dish>", // name to be displayed in the UI
             "image": "<url>", // url pointing to the image in the network
             "ingredients": [
                 "item 1",
                 "item 2",
                 // ...
                 "item n"
              ],
              "recipe": [
                 "step 1",
                 "step 2",
                 // ...
                 "step n"
              ]
        },
    ]
}
```
  
At the end, the team whose contributions have made it into production will win the game, the others lose.

## Setup Guide
If you want to build this site from source & run it locally on your machine, follow this setup guide. 

### Prerequisites
1. Node.js
   
    > Node.js is a JavaScript runtime. Get it [here](https://nodejs.org/en).
3. Git
   
    > Git is a Version Control System used across the industry. Get it [here](https://git-scm.com/downloads).

### Instructions
1. Clone this repository
    
    ```bash
    git clone https://github.com/vishalkrishnads/stist.git
    ```

2. Change the working directory

    ```bash
    cd stist/
    ```

3. Install all dependencies

    ```bash
    npm install
    ```

4. Start the server

    ```bash
    npm run dev
    ```

Done! The app should be up and running by now on [port 3000](http://localhost:3000). You can get started by editing `/app/page.js`.

## Contributing
Any outside contributions are welcome! Since this isn't a project, I haven't bothered to add any specific contribution guidelines. Any PR's improving the UI, UX or logic of the game itself are welcome.
