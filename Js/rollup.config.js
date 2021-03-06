import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';
import { version, browser } from './package.json';
const banner =
`/**
 * jsBridge v${version}
 * (c) ${new Date().getFullYear()} Twittytop
 * @license MIT
 */`;

let terserOptions = {};
if (process.env.NODE_ENV === 'production') {
  terserOptions.compress = {
    drop_debugger: true,
    drop_console: true,
    pure_funcs: ['console.log'] //移除console
  };
}

export default {
  input: 'src/api.js',
  output: [
    {
      banner,
      file: browser,
      format: 'umd',
      name: 'jsBridge'
    }
  ],
  plugins: [
    resolve({
      mainFields: ['module', 'main'],
      browser: true,
      // main 和 browser 属性将使插件决定将那些文件应用到bundle中
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    json(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    process.env.NODE_ENV !== 'development' && terser(terserOptions)
  ]
};
