import babel from 'rollup-plugin-babel';
import rollupNodeResolve from 'rollup-plugin-node-resolve';

export const inputOptions = {
    input: './src/bundles/BundleFolder/index.js',
    external: './node_modules/',
    plugins: [
      rollupNodeResolve({
        jsnext: true
      }),
      babel({
        babelrc: false,
        presets: [ [ '@babel/env', { modules: false } ] ],
        plugins: [ 'transform-class-properties' ]
      })
    ]
  }, outputOptions = {
    file: './src/js/bundles/BundleFile.js',
    format: 'iife',
    name: 'BundleName',
    sourcemap: true,
    exports: 'named'
  };