# Aliexpress clone / E-commerce project
For put into action the concepts learned about front-end development, I thought it's a nice idea to replicate the homepage of Aliexpress.
To do this, I implemented the concepts  of below:

> This project was born to only replicate the appierance of the webpage, however it evolved to a better insight more complex

## Getting started
This project joins all the main concepts of a **e-commerce** real project:

* A custom CSS for a better management of the styles in order to clone the apperience of _Aliexpress_ exactly like it looks like
* The folder structure is oriented to a real project, so that is made up of a recursive structure inside the folders
* An interactive and dynamic GUI with a bunch of componenets separed by folders according their type
* Usage of __Typescript__ in order to avoid type-errors and, instead handle the data-flow of the project properly
* Consuming a **REST API** to get the products attributes like it was a common e-commerce webpage
* Formatting of currency and  selection of languages to choose at the navbar

## Folder structure
As you can see, the structure of the project is *recursive*, I mean, every GUI folder has a set of `util` and `components` folder; it doesn't matter 
if not used, but the usage is available.

```
📦src
 ┣ 📂api
 ┃ ┣ 📂util
 ┣ 📂assets
 ┣ 📂components
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📂footer
 ┃ ┃ ┣ 📂header
 ┃ ┣ 📂ui
 ┃ ┃ ┣ 📂button
 ┃ ┃ ┣ 📂card
 ┃ ┃ ┣ 📂carousel
 ┃ ┃ ┣ 📂checkbox
 ┃ ┃ ┣ 📂icon
 ┃ ┃ ┣ 📂modal
 ┃ ┃ ┣ 📂navbar
 ┃ ┃ ┣ 📂radio-button
 ┃ ┃ ┣ 📂separator
 ┃ ┣ 📂util
 ┣ 📂features
 ┣ 📂hooks
 ┣ 📂interfaces
 ┣ 📂lib
 ┣ 📂pages
 ┃ ┣ 📂Homepage
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┣ 📂context
 ┃ ┃ ┣ 📂util
 ┃ ┣ 📂Products
 ┣ 📂styles
 ┣ 📂util
```

## Visit the page
You can go to the webpage via the `gh-pages` branch, or just click on the link:
[Take a look](https://aliexpress-clone-typescript-react.vercel.app)
