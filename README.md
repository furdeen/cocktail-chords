# Cocktail Chords

## Contents

- [Description](#description)
- [Development Approach](#developemnt-approach)
- [Functional Requirements](#functional-requirements)
- [Architecture](#architecture)
- [Usage](#usage)
- [Installation](#installtion)
- [Tests](#tests)
- [Technologies Used](#technolgies-used)
- [Questions](#how-to-contribute)

## Description

Cocktail Chords is a full-stack application that combines the art of cocktail mixology and music, offering a unique experience for enthusiasts looking for inspiration in both areas. Developed as a collaborative project, cocktail Chords is a full-stack application built with a React frontend and an Express Node backend.

#### Key Features

- Cocktail and Music Pairing: The "Cocktail of the Day" provides the user with a randomly selected cocktail matched with a complementary song.

- Customized Experience: Enables a user to select a preferred cocktail from a choice of categories. Cocktail Chords will link the cocktail to a music genre, provide a matching musical accompaniment, and provide a more user-personalized interaction.

## Development Approach

#### Project Requirement

The remit for this project was to build an application where the frontend communicates with the backend.
The backend was required to make external API calls, processes data, and add value before returning data the frontend. The development step taken are as follows:
API Exploration:

### Development Steps

- API investigation:
  - Investigated available public APIs.
  - Explored combinations to find a set that would work together to provide a complementary outcome.
- In-Depth API investigation
  - Further investigated the operation of selected APIs.
  - Analyzed data structure and format.
- Definition of project scope:
  - Defined a Minimum Viable Product (MVP).
  - Crafted a user story to guide development.
- Data requirements and architecture planning:
  - Defined the data needed at the frontend to implement the MVP.
  - Outlined data fetching from the API and processing requirements at the backend.
  - outlined the data flow between the frontend and backend.
- Ideation and wire framing:
  - Moved to an ideation stage.
  - Created mock wire frames for the user interface based on the defined requirements.

## Functional Requirements

### MVP

Objective: Develop a minimal version of Cocktail Chords that showcases the integration of cocktail mixology and music.

1. Cocktail and Music Pairing:
   - Randomly select a cocktail and pair it with a matching song.
   - Allow users to view the "Cocktail of the Day" on the frontend.
2. User Preferences:
   - Enable users to select their preferred cocktail from a predefined list.
3. Customized Experience:

   - Match the chosen cocktail with a corresponding music track.
   - Display the selected cocktail and music pairing on the frontend.

4. Technical Implementation:

   - Set up a React frontend for a user-friendly interface.
   - Develop an Express Node backend to handle data processing and implement API calls.
   - Build logic for fetching random cocktails and matching songs from external APIs.

### User Story

As a group we defined the following user story and criteria based on our MVP:

AS A cocktail enthusiast seeking inspiration for a unique mix of flavours and music experiences,
WHEN I access the Cocktail Chords application,
THEN I want to be presented with a "cocktail of the Day," paired with a matching themed song, so that I can discover new and exciting combinations.
AS A Cocktail enthusiast with a specific category of cocktail in mind,
WHEN I use Cocktail Chords to select my preferred cocktail, enhancing my overall experience.
As a user exploring Cocktail Chords interface,
When I interact with the UX,
Then I expect a seamless and intuitive display.
SO THAT....
```

## Architecture

### Frontend

Developed with React, the user interface provides an intuitive and responsive user experience.

### Backend

Built using Express Node, the backend handles calls from the front end, public API integration, data processing and returns data to the frontend.

#### Available routes

Cocktail Chord endpoints:

| Endpoints                                                  | Description                                        |
| ---------------------------------------------------------- | -------------------------------------------------- |
| http://localhost:8080/health                               | Server status                                      |
| http://localhost:8080/api/randomCocktail                   | Random cocktail                                    |
| http://localhost:8080/api/cocktailById/11007               | Single cocktail data                               |
| http://localhost:8080/api//cocktailsByCategory/Shot        | Cocktails in requested category                    |
| http://localhost:${PORT}/api/randomCocktailSong            | Random cocktail and matched music track            |
| http://localhost:${PORT}/api/categoryCocktailSong/Cocktail | Category selected cocktail paired with music track |

## Usage

The following clip demonstrates user interaction with the Cocktail Chords application.

![cocktail chords](./assets/cocktail-chords-clip.gif)

## Installation

After cloning the repo follow the instructions below to install the application:

cd into client and install dependencies:

       npm i

cd into server and install dependencies:

       npm i

To run the client:

    npm run start-client

The client application will run locally on your browser at localhost:5173

To run the server :

        npm run start-server

The backend server will run locally on your browser at localhost:8080

## Tests
Frontend testing (clientside)
In the frontend of our application, we use the "React Testing Library" in conjunction with "Vitest" to simulate user interactions and verify that components render correctly. We focus on unit tests for individual components, like DailyMix and DrinkMusicDetails, ensuring that they behave as expected when receiving data props and user events. "Snapshot" testing is also considered to safeguard against unintended changes in the UI.

To run the client-side test: 
npm test

Backend testing (Serverside)
For the backend, we employ Vitest for unit testing and Supertest for integration tests. Unit tests in files like cocktailcontroller.test.ts verify the correctness of our CocktailController functions, ensuring they handle various input cases correctly, from invalid IDs to successful data retrieval. Integration tests interact with a dummy server to ensure our API endpoints, such as /api/randomCocktail, respond as expected to HTTP requests, returning the correct status codes and data.

To run the server-side test:
npm test

## Technologies Used

- [TypeScript](https://www.typescriptlang.org/)
- [ExpressJS](https://expressjs.com/)
- [Supertest](https://www.npmjs.com/package/supertest)
- [testing library](https://testing-library.com/)
- [ESLint](https://eslint.org/)
- [Vitest](https://www.npmjs.com/package/vitest)
- [Vite](https://www.npmjs.com/package/vite)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Node](https://www.npmjs.com/package/node)
- [express](https://www.npmjs.com/package/express)

#


## Questions

If you have any questions regarding this project or the contents of this repository, please contact:

- Amier98: https://github.com/amier98
- Ben: https://github.com/manglebot
- Debra: https://github.com/Beanalini
- Faisal: https://github.com/furdeen

## Contribute

If you would like to contribute to this project contact one of the team using the above details.
