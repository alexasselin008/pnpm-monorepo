# jest-monorepo

## Usage

First install the dependencies with PNPM:

```bash
pnpm install
```

Then run the tests:

```bash
pnpm test
```

## Learning

- Jest [projects](https://jestjs.io/docs/configuration#projects-arraystring--projectconfig) works pretty well for a monorepo setup.

- The command can be executed at the root and the root Jest's config file is used.

- For every monorepo project, the root config is merged with the project's own Jest config. This allow for example to keep code transformer per project instead of using a generic global transform config.

- Every projects tests are run in the same process and report as a whole.

### Setup

- For Jest [projects](https://jestjs.io/docs/configuration#projects-arraystring--projectconfig) to work with a PNPM setup, Jest must also be installed at the root.

- If using a `.ts` configuration file for Jest, a root `ts.config.json` file should also be provided to configure TS.