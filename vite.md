Steps to install

`npm init vite-app <project>`

`cd <project>`

`yarn`

`yarn dev`

`npm i -D tailwindcss@latest postcss@latest autoprefixer@latest`

`npx tailwind init -p`

Add the following to purge [] in `tailwind.config.js`

``` json    
purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']

```
Remove everything in index.css, replacing it with:

``` css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Sources:
https://www.youtube.com/watch?v=ftT8nHHCZrI
https://tailwindcss.com/docs/guides/vite
