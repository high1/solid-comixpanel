import { defineConfig } from 'vite';
import mdx from '@mdx-js/rollup';
import solid from 'vite-plugin-solid';
import uno from 'unocss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';


export default defineConfig({
  plugins: [
    mdx({
      jsxImportSource: 'solid-jsx',
      providerImportSource: 'solid-jsx',
    }),
    solid(),
    uno(),
    tsconfigPaths(),
  ],
});
