# Frontend Development Kit

## Installation
* Download the build: ```git clone https://github.com/andreyalexeich/gulppack-scss.git```;
* Install ```gulp``` globally: ```yarn global add gulp-cli```;
* Go to the downloaded build folder: ```cd gulppack-scss```;
* Enter the command that will download the necessary components for the correct operation of our assembly, specified in the ```package.json```: ```yarn```;
* Enter the command: ```yarn run dev``` (development mode);
* To finalize the project, enter the yarn run build command ```yarn run build```.

## Plugins
* [gulp-if](https://www.npmjs.com/package/gulp-if) - running tasks only when it is needed;
* [browser-sync](https://browsersync.io/docs/gulp) - live web page reload when making changes to your project files;
* [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) — automatically arranges vendor prefixes in CSS in accordance with the [Can I Use](https://caniuse.com/);
* [gulp-babel](https://www.npmjs.com/package/gulp-babel) - using ES6 with [Babel](https://babeljs.io/);
* [rollup](https://www.npmjs.com/package/rollup) - module bundler for JavaScript;
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) — minification of JS-files;
* [gulp-concat](https://www.npmjs.com/package/gulp-concat) -  file merging;
* [gulp-sass](https://www.npmjs.com/package/gulp-sass) — compiling SCSS to CSS;
* [gulp-group-css-media-queries](https://www.npmjs.com/package/gulp-group-css-media-queries) — CSS postprocessing: group media queries;
* [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) — minification of CSS files;
* [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) - style map;
* [gulp-rename](https://www.npmjs.com/package/gulp-rename) — rename files, add suffixes and prefixes (for example, add the ```.min``` suffix to minified files);
* [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) — image compression PNG, JPG, GIF and SVG (including additional plug-ins for optimization);
* [gulp-favicons](https://github.com/evilebottnawi/favicons) — faviconok generator for your project;
* [gulp-svg-sprites](https://www.npmjs.com/package/gulp-svg-sprites) — creating SVG sprites;
* [gulp-replace](https://www.npmjs.com/package/gulp-replace) - replace strings;
* [gulp-rigger](https://www.npmjs.com/package/gulp-rigger) - allows you to insert content from individual files into the main one;
* [gulp-plumber](https://www.npmjs.com/package/gulp-plumber) — command line alerts (for example, errors in SCSS / Sass);
* [gulp-debug](https://www.npmjs.com/package/gulp-debug) — debugging in the terminal;
* [gulp-watch](https://www.npmjs.com/package/gulp-watch) — tracking changes in your project files;
* [gulp-clean](https://www.npmjs.com/package/gulp-clean) — delete files and folders;
* [yargs](https://www.npmjs.com/package/yargs) - getting command line arguments in Node.js.
    
### Development mode
```yarn run dev```

### Production mode
```yarn run build```