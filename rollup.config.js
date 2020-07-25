const {
  terser
} = require('rollup-plugin-terser')
const {
  nodeResolve
} = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const svelte = require('rollup-plugin-svelte')
const multi = require('@rollup/plugin-multi-entry')

export default [{
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      plugins: [
        terser({
          compress: {
            drop_console: true
          },
          output: {
            comments: false
          },
          ecma: 2019
        })
      ]
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      plugins: [
        terser({
          compress: {
            drop_console: true
          },
          output: {
            comments: false
          },
          ecma: 2019
        })
      ]
    }
  ],
  plugins: [
    svelte({}),
    nodeResolve({}),
    commonjs({
      include: ['./src/**', 'node_modules/**']
    })
  ]
},
{
  input: 'spec/index.spec.js',
  output: [
    {
      file: 'test/bundle-tests.js',
      format: 'cjs',
      sourcemap: true,
      plugins: []
    }
  ],
  plugins: [
    svelte({}),
    nodeResolve(),
    commonjs({
      include: ['./src/**', 'node_modules/**']
    })
  ]
}]
