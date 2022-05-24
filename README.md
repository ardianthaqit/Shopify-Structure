Shopify Development Environment

This structure for Shopify is created by Ardijan Thaçi ardianthaqit2014@gmail.com,
with best modules to create a shop using tailwindcss, webpack, laravel-mix and cross-env and other modules which makes the shop more faster and more optimized


First you need to delete all files inside shopify folder after that you need to download your theme from Shopify with theme-kit 

theme get --password=[your-theme-kit-password] --store="[your-store.myshopify.com]" --themeid=[your-theme-id]

1.Copy the config.yml.example and create your own config.yml
2.Use your own Themekit credentials in the config.yml
Note: make sure you have the config.yml inside the shopify folder and outside the shopify folder

Installation
Step #1: Install node modules

npm i 

Step #2: Theme watch and make allow in live in shopify

```npm run shopify```

Step #3:Compile files with Webpack and Laravel-mix

npm run watch

Step #4: Run the CLI to scan your template files for classes and build your CSS.

npm run tailwindcss


NOTE: please be careful with the changes you make in the configs file.
