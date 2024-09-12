# Pokedex Coding Challenge
Pokedex application using TypeScript, Tailwind CSS, React, and GraphQL. A Pokedex is a digital encyclopedia that contains information about various Pokémon, including their abilities, stats, and types. 

The goal of this challenge is to build an application where users can:
- Pokemon List
- Search for Pokémon by name.
- View detailed information about each Pokémon, such as their name, image, type, abilities, and stats.
- Compare two Pokémon to see their stats side by side.

### Requirements:
#### Tech Stack:
* TypeScript: Ensure type safety across your codebase.
* React: Use functional components and hooks to build the application.
* Tailwind CSS: Utilize Tailwind CSS for styling.
* GraphQL: [Fetch data using GraphQL from](https://graphql-pokemon2.vercel.app/)
 [API docs:}(https://wayfair.github.io/dociql/)

### Features:
- Pokemon List.
- Search Functionality: Implement a search bar where users can search for Pokémon by name.
- Pokémon Details Page:
- Display detailed information about a Pokémon, including:
    - Name
    - Image
    - Types
    - Abilities
    - Base stats (HP, Attack, Defense, etc.)

### Usage
1. Copy .env.example to .env and replace the NEXT_PUBLIC_API_URL placeholder with the api url
    ```bash 
    cp .env.example .env
    ```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3. To compare two pokemons click on the cards to select two, you will be asked if you want to compare, go ahead and answer yes. This will take you the compare page where you can see differences about the pokemons.

4. Where back button is not applicable use the logo image on the top left to navigate to the home screen.
5. Click on know more button to view the details of each card.


## Challenges
- The apis to some extent does not tally with the data required to populate card some cards and not is not provision even to adjust the apis.
- Some engagement at work could not allow me to give in my best short on the this as should however, believe if am given the opportunity to focus on one thing of cause i will do much better.
- I will implement search functionality before close of 12pm 


