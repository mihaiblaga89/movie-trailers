### Instructions

1. `git clone <repo>`
2. `cd dir`
3. `yarn`
4. `npm start`

The app should open a new browser in the default browser. If it doesn't, open [http://localhost:3000](http://localhost:3000) manually.

### Running the tests

`npm t`

Pressing `a` will run all the tests.
Pressing `w` will show the help.

### Known issues

1. On some versions yarn complains about `"react-scripts > pnp-webpack-plugin > ts-pnp@1.0.1" has unmet peer dependency "typescript@*"`. This is a known issue in create-react-app [Link1](https://github.com/facebook/create-react-app/issues/6691) [Link2](https://github.com/arcanis/pnp-webpack-plugin/issues/7) That's the reason for adding the yarn requirement in package.json.
