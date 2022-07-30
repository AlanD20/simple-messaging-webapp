import { defineConfig } from 'rollup';

const prod = process.env.NODE_ENV === 'production' ? true : false;

export default defineConfig({
  treeshake: prod,
  watch: !prod,
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  plugins: []
});
