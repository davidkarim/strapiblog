# strapiblog

This project is based on the following blog:

https://strapi.io/blog/build-a-blog-with-angular-js-strapi-and-apollo


```shell
yarn create strapi-app backend --quickstart --no-run
cd backend
yarn strapi install graphql
yarn develop
cd ..
ng version
# Angular CLI: 9.0.3
# Node: 12.16.1
# OS: darwin x64
ng new frontend
# Routing -> yes
# Stylesheet -> SCSS
cd frontend
ng add apollo-angular
# Modified uri in src/app/graphql.modules.ts
yarn add uikit
npm install
npm install --save-dev jquery # Got jquery error when running ng serve, this solves

# Start servers
cd ../backend
npm run strapi develop
cd ../frontend
ng serve
```

Frontend

```shell
ng generate c nav --skip-import # Create a nav component
mkdir -p src/app/apollo/queries/category
touch src/app/apollo/queries/category/categories.js

ng generate c articles --skip-import # Create article component
mkdir -p src/app/apollo/queries/article
touch src/app/apollo/queries/article/articles.js
```
