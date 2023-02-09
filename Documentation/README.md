***
# running the react app
***

Once you have created your app using npx, you can run it by following these steps:
Open a terminal and navigate to the root of your project folder.

- Run `npm install` command to install the necessary dependencies.
- Run `npm start` command to start the development server. This will typically start a
- development server on your localhost and open a browser window with the app running.

You should see the app running in your browser at the address `http://localhost:3000/`.
You can also run other commands, such as `npm run build` to build the app for production or `npm test` to run tests, depending on the packages that you have installed and the scripts that you have defined in your package.json file.

***
# Why TailWind CSS ?
***
|                                                                      Tailwind CSS                                                                     |                                                                       Bootstrap                                                                       |
|------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Gives you full control over the design and layout of your website.                                                                              | Helps you create a responsive design and layout for your website quickly.                                                                         |
| Allows you to create a clean and simple look by using pre-defined utility classes that can be put together to make a website.                        | Comes with a lot of pre-defined styles and layout modules that you may not need for a minimalist website.                                         |
| Lightweight and easy to customize.                                                                                                                | May not align with a minimalist design and it can be difficult to create a clean and simple look with Bootstrap.                                    |

***
# Why React ?
***
React is a JavaScript library that can be a good choice for building a website, especially if you want a highly interactive and dynamic website. It allows you to build your website as a collection of reusable components, it has a virtual DOM for performance optimization, it is flexible, scalable, and widely adopted.
Compared to other frameworks, React is particularly well suited for building complex and highly interactive user interfaces. Other frameworks such as Angular and Vue.js also provide reusable components, however, React's implementation of the virtual DOM and its focus on the component-based architecture make it particularly well-suited for building large, complex applications with changing data.

***
# Folder Structure
***
```
- client/
  - public/
    - index.html
    - favicon.ico
    - manifest.json
  - src/
    - components/
    - pages/
    - store/
    - utils/
    - App.js
    - index.js
    - ...
- server/
  - config/
  - controllers/
  - models/
  - routes/
  - utils/
  - index.js
  - ...
- package.json
- README.md
- .gitignore
- .env
```

<!-- Please keep in mind that GitHub markdown uses --- to create horizontal lines as well,
 but it's used for creating tables and it's not recommended to use it as a separator between sections. -->