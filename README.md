# Princess Finder

[![License - MIT](https://img.shields.io/badge/License-MIT-blue)](#license)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

I've borrowed all the Disney Princess dolls from my daughter to build a Machine Learning model such that, an application can recognize them with confidence using a webcam. I have given it a name too. The app is called, `Princess Finder`. 

## Technologies Used

The `Princess Finder` app is built using,
- [The Teachable Machine](https://teachablemachine.withgoogle.com/): How about an easy and fast way to create machine learning `models` that you can directly use in your app or site? The Teachable Machine allows you to `train` a computer with images, sounds, and poses. We have created a model using the Disney princess so that, we can perform an `Image Classification` by using it in our app.
- [ml5.js](https://learn.ml5js.org/#/): It is machine learning for the web using your web browser. It uses the web browser's built-in graphics processing unit (GPU) to perform fast calculations. We can use the API like, `imageClassifier(model)`, `classify`, etc. to perform the image classification.
- [React](https://reactjs.org/docs/getting-started.html): It is a JavaScript library for building user interfaces. We can use `ml5.js` in a React application just by installing and importing the dependency.

Here is a snap from the app shows, it is 93% confident that the princess is Jasmine. It also marks it with a golden ring.

> ![jasmine.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1609042885907/BlS6bjt4g.png)

Whereas, there is no way I look like a Disney Princess(not even a doll). Hence my own image has been classified correctly saying, `No Dolls`.

> ![no_dolls.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1609043109997/kMZcy7EGe.png)

## Want to Motivate?

Thanks for your time to reading this. Feel free to clone/fork/improve. Who doesn't want motivations? Give the project a star(⭐) if you liked the work.

## Many Thanks to all the `Stargazers` who has supported this project with stars(⭐)

[![Thanks to all stargazers](https://git-lister.onrender.com/api/stars/atapas/princess-finder?limit=15)](https://github.com/atapas/princess-finder/stargazers)

## Demo

You can find a [Live Demo from here](http://princess-finder.netlify.app/)

Build Status: [![Netlify Status](https://api.netlify.com/api/v1/badges/a78bf701-a71f-4d07-a7ef-3f3ba21aefbb/deploy-status)](https://app.netlify.com/sites/princess-finder/deploys)

# How to Run this Project Locally?
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

```shell
# Or npm install

yarn install
```
Then,

```shell
# Or npm run start

yarn start
```

This will run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://MichaelCurrin.github.io"><img src="https://avatars0.githubusercontent.com/u/18750745?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Michael Currin</b></sub></a><br /><a href="https://github.com/atapas/princess-finder/issues?q=author%3AMichaelCurrin" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://tapasadhikary.com"><img src="https://avatars1.githubusercontent.com/u/3633137?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tapas Adhikary</b></sub></a><br /><a href="https://github.com/atapas/princess-finder/commits?author=atapas" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

Released under [MIT](/LICENSE) by [@atapas](https://github.com/atapas).
