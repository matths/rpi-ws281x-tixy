import fs from 'fs';
import childProcess from 'child_process';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import builtins from 'builtin-modules'

const production = !process.env.ROLLUP_WATCH;

const serve = () => ({
  writeBundle() {
    const ref = '__rollup_serve_child_process_reference__';
    if (process[ref]) {
      process[ref].kill();
    }
    process[ref] = childProcess.spawn('npm', ['run', 'start', '--', '--dev'], {
      stdio: ['ignore', 'inherit', 'inherit'],
      shell: true
    });
  }
});

const browser = {
  input: 'src/browser.mjs',
  output: {
    sourcemap: true, 
    format: 'iife',
    name: 'render',
    file: 'build/js/render.js'
  },
  plugins: [
    resolve({
      browser: true,
    }),
    commonjs(),
    !production && serve(),
    !production && livereload({
      watch: 'build',
      verbose: true,
      https: {
        key: fs.readFileSync('server/ssl/private/server.key'),
        cert: fs.readFileSync('server/ssl/certs/server.crt')
      }
      }),
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
};

export default [browser];
