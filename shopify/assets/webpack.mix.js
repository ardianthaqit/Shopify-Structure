// webpack.mix.js

let mix = require('laravel-mix');

mix.copy('tailwind.config.js', 'shopify/assets/tailwind.config.js');
mix.copy('webpack.mix.js', 'shopify/assets/webpack.mix.js');

mix.styles(
    [
        'dist/css/application.css',
    ],
    'shopify/assets/main.css'
);
mix. scripts(
    [
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/alpinejs/dist/cdn.min.js",
        "node_modules/swiper/swiper-bundle.min.js",
        "node_modules/lazysizes/lazysizes.min.js",
        "dist/js/custom.js"
    ], 
    "shopify/assets/main.js"
);