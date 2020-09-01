# `typescript-node-express`

A simple starter for an Express server written in TypeScript.

Developed this to test benchmarks for different compilers and toolchains that
can check and compile TypeScript: ([blog post](https://tom.bio/blog/is-it-worth-it-to-precompile-your-typescript-node-js-code))

## Step 1 - Basic Setup

```
git clone https://github.com/tbjgolden/typescript-node-express.git
cd typescript-node-express
yarn
```

## Step 2 - Choosing your bundler

### Option A - Using with `ts-node` for development and `webpack` for production (recommended)

```
yarn remove rollup @rollup/plugin-commonjs @rollup/plugin-json @rollup/plugin-node-resolve @rollup/plugin-typescript rollup-plugin-terser
```

```
  "scripts": {
    "start": "nodemon --watch 'src/**/*.ts' --ignore 'src/**/*.spec.ts' --exec 'ts-node' src/index.ts",
    "test": "jest",
    "build": "webpack",
    "serve": "node webpack/index.js"
  },
```

### Option B - Using with `ts-node` for development and `rollup` for production

```
yarn remove webpack webpack-cli
```

```
  "scripts": {
    "start": "nodemon --watch 'src/**/*.ts' --ignore 'src/**/*.spec.ts' --exec 'ts-node' src/index.ts",
    "test": "jest",
    "build": "rollup -c --silent",
    "serve": "node rollup/index.js"
  },
```

### Option C - Using with `ts-node` for development and `tsc` for production


```
yarn remove rollup @rollup/plugin-commonjs @rollup/plugin-json @rollup/plugin-node-resolve @rollup/plugin-typescript rollup-plugin-terser webpack webpack-cli
```

```
  "scripts": {
    "start": "nodemon --watch 'src/**/*.ts' --ignore 'src/**/*.spec.ts' --exec 'ts-node' src/index.ts",
    "test": "jest",
    "build": "tsc",
    "serve": "node tsc/index.js"
  },
```

## Step 3 - Usage

* `yarn start`
  * nodemon watches for changes in the src directory, runs with ts-node
* `yarn test`
  * runs jest tests
* `yarn build`
  * builds typescript source to javascript (bundles and minifies with webpack or rollup)
* `yarn serve`
  * runs the javascript generated by `yarn build`
