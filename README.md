
# Credit Card Validation

## Requirements

For development, you will only need Node.js installed on your environment.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v20.11.0

    $ npm --version
    v10.2.4

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

# Backend

### Base URL: http://localhost:8000/api/


- Open terminal in the root folder 
- cd backend
- then install dependencies as described below

### To install dependencies

```js
  npm install
```

### Command to start server

- to run server using nodemon

```js
  npm start
```

### Commands to stop server

- to stop server using nodemon

```js
CTRL + C;
```

#### You can see more commands for server in `package.json -> scripts`

# Frontend

- Open terminal in the root folder 
- cd frontend
- then install dependencies as described below

### To install dependencies

```js
  npm install
```

### Command to start server

- to run server using nodemon

```js
  npm start
```

## Languages & tools


### React with typescript

- React is used to write the ui components
- Typescript is used to have type safety for our project


### CSS
- CSS is used to write nice and consistent styling for the front end

## Features

- Enter credit card number to verify if it's valid or not
- Front end validations are also implemented
  - User cannot enter any characters other than digits
  - User cannot enter more than 19 digits
- If credit card is valid a success message is shown using a toast notification
- Similarly if credit card is not valid a failure message is shown using a toast notification
- Wrote a couple of test cases to test functionality

## Future Improvements

- We can have multiple data fields to verify more details about credit card
- Currently the data is verified on clicking the validate button, in future we can validate on focus-out when dealing with multiple fields
- Backend structure is well set up to to add more functionality and features
