import {defineConfig} from 'dumi';
import path from 'path';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: '@dtjoy',
  },
  resolve: {
    atomDirs: [
      {type: 'component', dir: 'packages/components/src'},
    ]
  },
  autoAlias:false,
  alias: {
    "@dtjoy/components": '/packages/components/src',
  }
});
