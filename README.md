# Princess Finder
I've borrowed all the Disney Princess dolls from my daughter to build a Machine Learning model such that, an application can recognize them with confidence using a webcam. I have given it a name too. The app is called, `Princess Finder`. 

# Technologies Used
The `Princess Finder` app is built using,
- [The Teachable Machine](https://teachablemachine.withgoogle.com/): How about an easy and fast way to create machine learning `models` that you can directly use in your app or site? The Teachable Machine allows you to `train` a computer with images, sounds, and poses. We have created a model using the Disney princess so that, we can perform an `Image Classification` by using it in our app.
- [ml5.js](https://learn.ml5js.org/#/): It is machine learning for the web using your web browser. It uses the web browser's built-in graphics processing unit (GPU) to perform fast calculations. We can use the API like, `imageClassifier(model)`, `classify`, etc. to perform the image classification.
- [React](https://reactjs.org/docs/getting-started.html): It is a JavaScript library for building user interfaces. We can use `ml5.js` in a React application just by installing and importing the dependency.

Here is a snap from the app shows, it is 93% confident that the princess is Jasmine. It also marks it with a golden ring.

> ![jasmine.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1609042885907/BlS6bjt4g.png)

Whereas, there is no way I look like a Disney Princess(not even a doll). Hence my own image has been classified correctly saying, `No Dolls`.

> ![no_dolls.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1609043109997/kMZcy7EGe.png)

# Want to Motivate?
Thanks for your time to reading this. Feel free to clone/fork/improve. Who doesn't want motivations? Give the project a star(⭐) if you liked the work.

## Many Thanks to all the `Stargazers` who has supported this project with stars(⭐)

[![Stargazers repo roster for @atapas/princess-finder](https://reporoster.com/stars/atapas/princess-finder)](https://github.com/atapas/princess-finder/stargazers)

# Demo
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

