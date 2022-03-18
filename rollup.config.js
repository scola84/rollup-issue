import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

export default {
  input: {
    'a1': 'src/a/1.ts',
    'a2': 'src/a/2.ts'
  },
  output: {
    banner: '#!/usr/bin/env node',
    dir: '.',
    entryFileNames: 'dist/[name].js',
    format: 'cjs'
  },
  plugins: [
    commonjs(),
    resolve(),
    typescript({
        declaration: true,
        declarationDir: 'types',
        tsconfig: 'tsconfig.json'
    })
  ]
}
