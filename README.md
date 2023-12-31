# react-ts-experiments

A playground for experimenting in React with TypeScript and Vite.

## Other Features

- [x] [Tailwind CSS](https://tailwindcss.com/)
- [x] [ESLint](https://eslint.org/)
- [x] [Prettier](https://prettier.io/)
- [x] [Vitest](https://vitest.dev/)
- [x] [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [x] [Husky](https://typicode.github.io/husky/#/)
- [x] [Lint Staged](https://github.com/okonet/lint-staged)

Originally created with [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite#create-vite-). The scaffolding process is documented [here](#scaffolding-and-configuration).

## Setup

```bash
# Install dependencies
pnpm install

# Start the dev server
pnpm dev

# Build for production
pnpm build

# Run tests
pnpm test

# Lint
pnpm lint
```

## Notes

### Scaffolding and Configuration

Originally created with [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite#create-vite-):

```bash
# Create a new project in the current directory 
# using the "react-ts" template
pnpm create vite . --template react-ts

# Install development dependencies (TODO: Vet this list)
pnpm install --save-dev eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

### Plan for Ensuring a Stable and Up-to-Date Developer Toolchain and Configuration

- [ ] Create a [GitHub Action](https://docs.github.com/en/actions) to run `pnpm update` and `pnpm install` on a schedule
- [ ] Create a [GitHub Action](https://docs.github.com/en/actions) to run `pnpm update` and `pnpm install` on a push to the `main` branch
- [ ] Create a [GitHub Action](https://docs.github.com/en/actions) to run `pnpm update` and `pnpm install` on a pull request to the `main` branch

## Sources and References for Best Practices and Great Configurations

- [Vite Docs](https://vitejs.dev/guide/)

## Dependencies

<!-- TODO: Vet the above dependency list -->

### Git

#### Gitignore

This project uses a [gitignore](./.gitignore) file generated by [gitignore.io](https://www.toptal.com/developers/gitignore).

- Created by: <https://www.toptal.com/developers/gitignore/api/node,linux,macos,windows,webstorm,visualstudiocode>
- Edit at: <https://www.toptal.com/developers/gitignore?templates=node,linux,macos,windows,webstorm,visualstudiocode>

The original react-ts vite template gitignore file is appended to the end of the generated gitignore file. It appears to be not entirely redundant, so it is left in place.

#### Commit Message Conventions

#### Husky and Lint Staged

This project uses [Husky](https://typicode.github.io/husky/#/) and [Lint Staged](https://github.com/okonet/lint-staged) to run linting and tests before commits.

### TypeScript

### ESLint

### Prettier

### Tailwind CSS

### Vitest

### React Testing Library

### Husky

### Lint Staged

### knip

## License

[MIT](./LICENSE)

<!-- Links -->
[react](https://react.dev/)
[typescript](https://www.typescriptlang.org/)
[vite](https://vitejs.dev/)
[eslint](https://eslint.org/)
[prettier](https://prettier.io/)
[tailwindcss](https://tailwindcss.com/)
[vitest](https://vitest.dev/)
[react testing library](https://testing-library.com/docs/react-testing-library/intro/)
[husky](https://typicode.github.io/husky/#/)
[lint staged](https://github.com/okonet/lint-staged)
