[![Build Status](https://travis-ci.org/r0b-/project-template-next-ts.svg?branch=master)](https://travis-ci.org/r0b-/project-template-next-ts)

## About

Project boilerplate build with [create-next-app](https://open.segment.com/create-next-app) and some additional packages to get you started with:
- [next.js](https://github.com/zeit/next.js/) - React16 + SSR + HMR + Prefetching + Code Splitting
    - The project includes a basic app structure with head, navigation and footer components that are wrapped by a layout component that can be included on each page.
- [TypeScript](https://www.typescriptlang.org) - Typed superset for JavaScript
- [TSLint](https://palantir.github.io/tslint/) - Linter for TypeScript
- [styled-components](https://www.styled-components.com/) - Component based styling with TypeScript support
- [Jest](https://facebook.github.io/jest/) + [Enzyme](http://airbnb.io/enzyme/) - React testing (unit, snapshot, mocking,...) with TypeScript support. Thanks to [ts-jest](https://github.com/kulshekhar/ts-jest)
      
### Setup

1. Install yarn: `npm i -g yarn`
2. `git clone https://github.com/r0b-/project-template-next-ts.git`
3. cd `project-template-next-ts`
4. Install dependencies: `yarn`
5. Optional for WebStorm/PHPStorm:<br> 
    - Install or activate plugins: 'tslint', 'styled-components', 'TypeScript spec file generator / navigator'.
    - To use the integrated test runner add a 'Jest' run configuration. For continuous running tests add `--watch` to 'Jest options'.
    - To use the integrated code analysis enable TSLint under 'Languages & Frameworks > TypeScript > TSLint'.  
    - Hide generated js files with right-click on project folder and select 'Hide ignored files'. (Edit .gitignore for more locations.)

### Available Scripts

- `yarn dev`<br>Runs the app in the development mode (with file watcher).
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- `yarn test`<br>Runs tests.

- `yarn build`<br>Builds the app for production to the `.next` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

- `yarn start`<br>Starts the application in production mode.
The application should be compiled with \`yarn build\` first.
See the section in Next docs about [deployment](https://github.com/zeit/next.js/wiki/Deployment) for more information.
