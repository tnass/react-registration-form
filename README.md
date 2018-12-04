# React Registration From

This Project is based on create-react-app but I've removed some clutter from the boilerplate. It already comes with a good 
`eslint` config for code style validation and `jest` for unit testing.

React seems to be a good fit for this task because it's relatively lightweight and definitely widely used
(one could think of migrating to `Preact` on build in order to lose some more weight).

Additional dependencies `lodash`, `node-noop`, `enzyme`. Other libraries as `redux` or similar for state management etc. 
were not needed to fulfill the requirements of this task.

I've decided to use `StyledComponents` and `themeProvider` for the component styles because I believe it's very scalable and 
maintainable. Once you get used to have component styles and the actual components in one place, you probably won't go back.

In terms of UX/accessibility I used as much semantically correct elements as possible, such as forms, buttons, inputs, labels
to respect tab order and keyboard input.

For the Password Strength Component I went with the first suggestion of the task description as I also reflects my personal
preference. Additionally I added the "view password" toggle next to the input field.

A few Unit tests have been added, however not all of the cases I wanted to test have been covered.

In a next step I would continue writing Unit tests, fixing existing bugs and refactor the PasswordStrengthMeter by extracting 
it's validator logic into a separate file/class. The component itself should not know that much of the internal logic.


### Available Scripts

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


