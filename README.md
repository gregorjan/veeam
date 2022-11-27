# Veeam exercise

## Getting Started

### Prerequisites

This project needs `node.js` v17 runtime and `yarn` as package manager.
It's highly recommended to use [nvm](https://github.com/nvm-sh/nvm) and run `nvm use`.
Version 17 was chosen since it is the latest version working on cloudflare. 


### Instalation

To install dependencies, run:

```bash
yarn 
```

### Development

To run the development server, run:

```bash
yarn dev
```

## CI/CD

Every Pull request is checked with github actions.

## Production

This project is deployed to cloudflare [here](https://veeam.gregg.network/).
Published storybook is available [here](https://veeam.gregg.network/storybook/).