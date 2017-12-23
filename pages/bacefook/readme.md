# Bacefook

Previously you have recreated mockups with HTML/CSS, and used JavaScript to solve problems.
 
In this assignment you will combine all the skills you have learned to create a social media app called Bacefook.


## Objectives

* Use query selectors to obtain references to DOM elements
* Register callbacks as event handlers
* Use arrow functions or bind() to keep reference to this
* Save to and load items from local storage
* Create elements, set their attributes, append them to the DOM
* Use set and clear interval to perform dynamic updates
* Use moment.js to format timestamps
* Use window.onload() to run code after initialization


## Background

Some code has already been written for you:

* `data_generator.js` - simulates creation of post data
* `app.js` - displays the data in your feed

You don't need to understand the code that's in `data_generator.js` to complete the basic requirements, but here's an overview of what it does:

It creates two global variables-- `bacefook` and `friends`. `friends` is just an array of strings representing the friends you have on your Bacefook. The `bacefook` variable is an object with two properties: `friends` and `newsfeed`. `newsfeed` is an array of objects with each object representing a Bacefook post. Each post object has the following: `friend`, `text`, `feeling`, `link`, `image` and `timestamp`.

`friends` is an object that contains all of your friends as the keys and their values as the various posts attributed to them.

When a post object is created, it gets added to both your `bacefook.newsfeed` array and to the respective friend array. So a post object 'written' by Kani will get added both to your Bacefook and also to the array found at `bacefook.friends.kani`

`data_generator.js` also kicks off a periodic process that adds more data into your newsfeed.

## Instructions

Begin by opening `index.html` in Chrome to verify that you can see the posts.

Write code as needed to achieve the following:

Basic Requirements:
* Show the new Bacefook posts. You can either show them automatically as they're created or add a button that refreshes to show the new posts.
* Display the timestamps of when the posts were created
* Display what the friend is 'feeling' for a post
* Style the page to improve its appearance

Advanced Requirements:
* At the top of `app.js`, there is a check to see if there is a username stored in `localstorage`. Have the username display somewhere on the page.
* There is an empty array for the variable `images` as well as an empty folder. Add images to the posts that are generated and display them.
* Show when the posts were created in a human friendly way (e.g. "posted 5 minutes ago"). Use [`moment.js`](https://momentjs.com/).
* Add a form so the user can add their own posts.
