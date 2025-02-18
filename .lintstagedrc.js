/** @type {import('lint-staged').Config} */
module.exports = {
  // Run prettier on all supported files
  '**/*.{ts,tsx,js,jsx,json,yaml,yml,html,css,scss,md,cjs,mjs}': ['prettier --write'],

  // Run ESLint only on files within apps directory
  'apps/**/*.{js,jsx,ts,tsx,cjs,mjs}': (files) => {
    // Get the unique app directories
    const appDirs = [...new Set(files.map((file) => file.split('/').slice(0, 2).join('/')))];
    // Run eslint for each app directory
    return appDirs.map(
      (dir) =>
        `cd ${dir} && eslint --fix ${files
          .filter((f) => f.startsWith(dir))
          .map((f) => f.replace(`${dir}/`, ''))
          .join(' ')}`,
    );
  },
};
