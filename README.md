<div align="center">
  <h2 align="center">Recipe Generator</h2>
  <p align="center">A comprehensive system for generating recipes based on available ingredients
    <br />
<a href="https://recipe-generator.netlify.app" style=""><strong>View live »</strong></a>

  <div style="max-width: 75px;">

[![Netlify Status](https://api.netlify.com/api/v1/badges/06b30488-35ec-4913-ba56-5bc3c2dd9a10/deploy-status)](https://app.netlify.com/sites/recipe-generator/deploys)

  </div>
  </p>
<small>Built with:</small>
<br/>
<img src="https://img.shields.io/badge/-Next.js-2b2b2b?logo=next.js&style=flat-square" alt="Badge">
<img src="https://img.shields.io/badge/TypeScript-2b2b2b?logo=Typescript&style=flat-square" alt="Badge">
<img src="https://img.shields.io/badge/Tailwind-2b2b2b?logo=TailwindCSS&style=flat-square" alt="Badge">
</div>

### Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/recipe-generator.git
   cd recipe-generator
   ```

2. Install dependencies:
   ```sh
   nvm use
   yarn
   ```

3. Start the development server:
   ```sh
   yarn dev
   ```

### Usage

| Use                    | Command           | URL                                            |
| ---------------------- | ----------------- | ---------------------------------------------- |
| Install locally        | `nvm use && yarn` |                                                |
| Start local dev server | `yarn dev`        | [http://localhost:3000](http://localhost:3000) |
| Static build           | `yarn build`      |                                                |
| Preview static build   | `yarn start`      | [http://localhost:3000](http://localhost:3000) |
| Run tests              | `yarn test`       |                                                |

### Testing

Run unit tests with Jest:
```sh
yarn test
```

### Storybook

Start Storybook to view and develop UI components in isolation:
```sh
yarn storybook
```

Build Storybook for production:
```sh
yarn build-storybook
```

### Environments

| Environment | URL                                                                                                  |
| ----------- | ---------------------------------------------------------------------------------------------------- |
| Local       | [http://localhost:3000](http://localhost:3000)                                                       |
| Develop     | [https://develop--recipe-generator.netlify.app/](https://develop--recipe-generator.netlify.app/)     |
| Production  | [https://recipe-generator.netlify.app](https://recipe-generator.netlify.app)                         |
| Storybook   | [http://localhost:6006](http://localhost:6006)                                                       |
