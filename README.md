# static-hanna-css-starter

Starter repo, for writing your own CSS using TypeScript and leveraging Hanna design system's CSS variables/helpers via the [`@reykjavik/hanna-css`][] package.

Uses `tsc` and then [es-in-css][cli-compiler] to convert all `/src/**/*.css.ts` files into `/_dist/**/*.css`.

(NOTE: The built CSS files are prettified in dev mode, but minified in production mode.)

It also copies all files from `/assets` into `/_dist`, but performs no processing on those files.

During dev mode, it also copies all files from `/dev-assets` into `/_dist` — useful for test HTML files that you don't want to be part of your production output.

## Before you start

Make sure to install the official [**vscode-styled-components**
extension][vscode-styled-components] for fancy syntax highlighting and
IntelliSense autocompletion inside ` css``  ` template literals.

Then take a quick look at documention of the [`@reykjavik/hanna-css`][] and [`es-in-css`][] libraries.

## Usage

```sh
yarn run dev
```

…starts up a simple http-server on <http://localhost:4200> and watches for file changes inside the [`/src`](./src), [`/assets`](./assets) and [`/dev-assets`](./dev-assets) folders.

```sh
yarn run build
```

…compiles a "production" build of the CSS files from their `/src/**.css.ts` sources, makes a fresh copy of (only) the `/assets` folder into `/_dist`

```sh
yarn run server
```

…starts the http-server in "production" mode, serving up whatever is inside the `/_dist` folder

```sh
yarn run start
```

…runs `yarn run build` and then `yarn run start`.

## Updating dependencies

Make sure you're using a sensibly up-to-date version of [`@reykjavik/hanna-css`][].

To update to the latest version use

```
yarn add --dev @reykjavik/hanna-css
```

<!-- Links: -->

[`@reykjavik/hanna-css`]: https://www.npmjs.com/package/@reykjavik/hanna-css
[`es-in-css`]: https://www.npmjs.com/package/es-in-css
[cli-compiler]: https://www.npmjs.com/package/es-in-css#compilation-api
[vscode-styled-components]:
  https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components
