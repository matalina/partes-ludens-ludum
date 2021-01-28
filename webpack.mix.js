let mix = require('laravel-mix');

mix.setPublicPath('assets')
    .vue()
    .js('src/js/app.js', 'js')
    .postCss("src/css/style.css", "css", [
        require("tailwindcss"),
    ]);