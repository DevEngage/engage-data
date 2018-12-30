import { Config } from '@stencil/core';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
// https://stenciljs.com/docs/config

export const config: Config = {
  plugins: [
    builtins(),
    globals()
  ],
  nodeResolve: {
    browser: true
  },
  outputTargets: [
    {
      type: 'dist'
    }
  ],
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.css'
};
