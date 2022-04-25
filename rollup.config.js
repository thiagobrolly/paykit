import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDeps from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import renameNodeModules from 'rollup-plugin-rename-node-modules';
import autoExternal from 'rollup-plugin-auto-external';

const { LERNA_ROOT_PATH } = process.env;

export default [
  {
    input: ['./src/index.ts'],
    output: [
      // ESM
      {
        format: 'esm',
        // sourcemap: true,
        dir: 'lib',
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].esm.js',
      },
      // CommonJS96+
      {
        format: 'cjs',
        // sourcemap: true,
        exports: 'named',
        dir: 'lib',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
    external: ['styled-components', 'react', 'react-dom'],
    plugins: [
      peerDeps(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: `${LERNA_ROOT_PATH}/tsconfig.json`,
        declaration: true,
        declarationDir: 'lib',
      }),
      postcss({
        extensions: ['.css'],
      }),
      terser(),
      autoExternal(),
      renameNodeModules('external'),
    ],
  },
];
