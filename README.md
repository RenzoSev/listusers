# Live Site
https://renzosev.github.io/listusers/

# About the project
### This is a project which lists users randomly generated with [randomuser.me](https://randomuser.me/documentation).

### This app has E2E tests and 100% coverage:
![image](https://github.com/RenzoSev/listusers/assets/73757018/31a23f56-7ca1-4a8e-b119-bff57445bfbc)

### Git Actions
This project has Actions enable for: deploy the app and run tests before merging PRs or manually running them.

#### ✅ PR with success test https://github.com/RenzoSev/listusers/pull/4
#### ❌ PR with error test https://github.com/RenzoSev/listusers/pull/3
#### ✍️ Actions https://github.com/RenzoSev/listusers/actions

#### The users are rendered within a carousel. The app currently renders 15 random users.
![1](https://github.com/RenzoSev/listusers/assets/73757018/4f956bfd-6ee8-49ef-a416-acfd6d197c59)

#### The app also includes a modal with adress details for it user:
![2](https://github.com/RenzoSev/listusers/assets/73757018/a566382a-0a27-43b3-8664-62e29ee61147)

## Demo
https://github.com/RenzoSev/listusers/assets/73757018/f66f2e5c-0ae8-4349-a905-87776f24df06

## Debug
Sometimes, the randomization could be a problem. The app supports a fix renderization of users by acessing `/debug`.

**IMPORTANT:** Debug mode won't work in Live Mode.

# Installing

_**This project was entire build within a docker image. I strongly recommend you to test through the docker created here**_. Otherwise, you can follow these steps to successfully run the project in your local machine.

Before choosing the best approach for you to install the app, you might need to do the following steps:

### Cloning the app:
```
git clone https://github.com/RenzoSev/listusers.git
```

### Accessing the app:
```
cd listusers
```

#### The APP will be available at (for both installations):

  ➜  Local:   http://localhost:5173/

  ➜  Network: http://172.18.0.2:5173/

#### IMPORTANT2: to successfully run cypress tests, you must run the app before running them.

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
npx cypress install
```

#### Running the app:
```
npm run dev
```

#### Testing the app:
```
npm run cy:run
```

Feel free to check in your browser the coverage result by opening the file `listusers/coverage/lcov-report/index.html`.

## Locally
To run the project locally, you have to install the dependencies for your OS. Feel free to check the related dependencies of this project in the Dependencies section. Therefore, the most necessary might be NVM/Node and Cypress. Both of them have their own step guide.

### Installing the app:
```
npm install
npx cypress install
```

### Running the app:
```
npm run dev
```

### Running the tests:
Please, do not forget to install the Cypress dependencies. Otherwise, you won't be able to run it properly.

It will run the tests on the terminal. Feel free to check in your browser the coverage result by opening the file `listusers/coverage/lcov-report/index.html`
```
npm cy:run
```

It will open the Cypress UI. It is possible to check the coverage there.
```
npm cy:open
```

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
