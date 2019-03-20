## Roni's Youtube Video Search

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Features

1. The app allows you to search for a list of 12 YouTube videos per page
2. Pagination for the list of displayed videos
3. You can click on one of those videos to watch it
4. After you click on the one of videos, you will get redirect to another page( using react router)
5. Infinite Scroll - Instead of pagination I created infinite scroll in branch github-deployment, It is also deployed in [Live version is here](https://ronihe.github.io/youtube-video-search/)

## Branch Introduction

<b>master: </b> all the above features with pagination
<b>github-deployment: </b> all the above features with infinite scroll

## Tech/framework used

<b>Built with</b>

- JavaScript ES8 (Uses async/await)
- React.js - front end web framework (Maintained by FB)
- React-Router - routing library for React
- Redux - library for React state management
- Redux-thunk - library extending redux to handle async actions
- CSS - a stylesheet language to describe the presentation of a document written in HTML or XML
- Axios - request library

## API Reference

[Youtube API](https://developers.google.com/youtube/v3/)

## Tests

<b> Test Stack </b>

- Jest - testing framework
- Enzyme - component testing
- Redux-mock-store - redux store mocking library
- fetch-mock - http requests mocking library
- Prop-types - prop type definition validation

<b> Test Coverage </b>
<img src='./img/test1.png'>
<img src='./img/test2.png'>
