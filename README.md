# Jumia Exercise

## How To Use: Docker

1) Can use either Dockerfile or docker-compose to build your Environment
2) Use your `http://localhost:4200/` to see the SPA

## How To Use: Local/Angular

Requirements:
- Node: v16+

1) `npm install`
2) `ng serve -o`
3) The `ng serve -o` open on your default browser a tab with the compilation on `http://localhost:4200/`

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Improvements
- Docker: Personally I never needed to create Dockerfile or Docker configurations, I spent almost a whole day understanding how to create the configuration file and testing it locally to see if it was working, so if there is any problem with Docker I apologize

- Should be possible to export current list by CSV or XML: I couldn't finish it in time correctly so I removed it from the final code, but I would use the File-Saver framework to download the current page for the user

- Infinite/Virtual Scrolling: I didn't understand exactly how I could implement an infinite scroll bringing users' information using a table, after all, I made a paginator to control the pages and amount of results per page

- Possibility to add or remove columns: I focused too much on leaving the rest functional that I didn't have time to do this functionality

- Only request the fields that really need: I was confused in this item if I should create buttons or checkboxes to choose which fields to request or to request only the fields that will be used. If this is the last option I made the call only with the fields to be used

