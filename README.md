# webpack-boilerplate

A simple **webpack 4 starter project** for your basic web development needs.

## When to use it

When you don't need anything fancy, no frontend framework, no unit testing, simply a **starter project that would let you use sass, ES6, load assets, add vendor prefixes, start a dev server, generate sourcemaps and optimize everything for production.**

## Features

* Separated development and production webpack settings you can understand
* Sass
* ES6
* Asset loading
* CSS Vendor prefixing
* Development server
* Sourcemaps
* Favicons generation
* Production optimizations
* Mobile browser header color

## Requirements

* [Node](https://nodejs.org) > 7.6

## Usage

Substitute `PROJECT-NAME` for your project name.

Clone the repository

```sh
 git clone https://github.com/lifenautjoe/webpack-starter-basic PROJECT-NAME
 cd PROJECT-NAME
```

Install npm dependencies

```sh
 npm install 
```

Run the kickstart command
```sh
npm run kickstart
```

**After the project has been kickstarted**

To start the development server

```sh
npm run dev
```

To build for production

```sh
npm run build
```

To preview the production build
```sh
npm start
```
### How to load fonts

If you don't support Opera Mini, browsers support the .woff format. Its newer version .woff2, is widely supported by modern browsers and can be a good alternative.

If you decide to use only this format you can load the fonts in a similar manner to images.

In your `webpack.dev.js` and `webpack.prod.js` add the following

```js
module.exports = {
    // ..
    module: {
        rules: [
            // ..
            {
                test: /\.woff$/,
                loader: 'url-loader',
                options: {
                    // Limit at 50k. Above that it emits separate files
                    limit: 50000,
                    // url-loader sets mimetype if it's passed.
                    // Without this it derives it from the file extension
                    mimetype: 'application/font-woff',
                    // Output below fonts directory
                    name: './fonts/[name].[ext]',
                },
            }
            // ..
        ]
    }
    // ..
};
```

And let's say your font is in the folder `assets` with the name `pixel.woff`

You can add it and use it in `index.scss` as
```scss
@font-face {
    font-family: "Pixel";
    src: url('./../assets/pixel.woff') format('woff');
}

.body{
    font-family: 'Pixel', sans-serif;
}
```

If you would like to support all kinds of font types, remove the woff rule we previously added to `webpack.dev.js` and `webpack.prod.js` and add the following

```js
module.exports = {
    // ..
    module: {
        rules: [
            // ..
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]',
                },
            }
            // ..
        ]
    }
    // ..
};
```

And assuming you have your fonts in the directory `assets` with names `pixel.woff`, `pixel.ttf`, `pixel.eot` , etc.

You can add it and use it in `index.scss` as
```scss
@font-face {
    font-family: 'Pixel';
    src: url('./../assets/pixel.woff2') format('woff2'),
    url('./../assets/pixel.woff') format('woff'),
    url('./../assets/pixel.eot') format('embedded-opentype'),
    url('./../assets/pixel.ttf') format('truetype');
    /* Add other formats as you see fit */
}
```

## Credits
This boilerplate is based on [webpack-starter-basic](https://github.com/lifenautjoe/webpack-starter-basic).
