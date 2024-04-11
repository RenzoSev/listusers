# About the project
This is a project which lists users randomly generated with [randomuser.me](https://randomuser.me/documentation).

This app has E2E tests and 100% coverage (more details below).

The users are rendered within a carousel. The app currently renders 15 random users.

The app also includes a modal with adress details for it user:

## Demo

## Debug
Sometimes, the randomization could be a problem. The app supports a fix renderization of users by acessing `/debug`.

# Installing

_**This project was entire build within a docker image. I strongly recommend you to test through the docker created here**_. Otherwise, you can follow these steps to successfully run the project in your local machine.

## Docker
Inside the project, run the following command or the correspondents for: build Dockerfile and run Docker Compose.

***IMPORTANT: you won't be able to run the Cypress UI within the docker. Therefore, the current docker supports running the Cypress Run, which should be enough for now since you can check the tests passing and also the coverage which is at 100% for now.***

```
docker buildx build .
docker-compose up -d
```

The container won't run anything by itself. It is necessary, for now, to run the desired commands manually. The steps will show you how to run the app and the tests.

```
# find the container id by doing this command.
docker ps
```

```
docker exec -it {CONTAINER_ID} bash
```

Now, you are within the containers's terminal. You should access the project and run the commands there.

```
cd listusers
npm install
```

#### Running the app:
```
npm run dev
```

#### Testing the app:
```
npm run cy:run
```

The coverage will automatically be outputed in your terminal by doing this command, but feel free to check in your browser the result by opening the file `listusers/coverage/lcov-report/index.html`.

## Locally
To run the project locally, you have to install the dependencies for your OS. Feel free to check the related dependencies of this project in the Dependencies section. Therefore, the most necessary might be NVM/Node and Cypress. Both of them have their own step guide.

### Cloning the app:
`git clone https://github.com/RenzoSev/listusers.git`

### Accessing the app:
`cd listusers`

### Installing the app:
`npm install`

### Running the app:
`npm run dev`

### Running the tests:
Please, do not forget to install the Cypress dependencies. Otherwise, you won't be able to run it properly.

`npm cy:run` it will run the tests on the terminal.
`npm cy:open` it will open the Cypress UI.


# Dependencies
## App
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [DaisyUI](https://daisyui.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [SWC (Rust Compiler)](https://swc.rs/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [React Icon](https://react-icons.github.io/react-icons/)

## Tests 🧪
- [Cypress E2E](https://www.cypress.io/)
- [Istanbuljs](https://istanbul.js.org/)
- [Nyc](https://github.com/istanbuljs/nyc)
