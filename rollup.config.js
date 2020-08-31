import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';

export default {
  input: 'src/index.ts',
  output: {
    file: 'rollup/index.js',
    format: 'cjs',
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs({ extensions: ['.js', '.ts'] }),
    terser(),
    typescript(),
    json()
  ]
};
