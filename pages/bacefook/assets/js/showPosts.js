function convertTimestamp(timestamp) {
    if (moment().diff(timestamp, 'minutes') < 5) {
      return moment(timestamp).fromNow();
    } else {
      return moment(timestamp).format("MMMM DD [at] hh:mma [(]ZZ[)]");
    }
  }

// get newsfeed element
const containerEl = document.querySelector('#newsfeed');

// create user interaction in posts
const userInterEl = document.createElement('div');
userInterEl.className = 'userInter';

const likeEl = document.createElement('span');
likeEl.className = 'userInterEl uLike';
likeEl.innerHTML = '<i class="far fa-thumbs-up"></i> Like';

const commentEl = document.createElement('span');
commentEl.className = 'userInterEl uComment';
commentEl.innerHTML = '<i class="far fa-comment"></i> Comment';

const shareEl = document.createElement('span');
shareEl.className = 'userInterEl uShare';
shareEl.innerHTML = '<i class="fas fa-share"></i> Share';
userInterEl.append(likeEl, commentEl, shareEl);

// auto-refresh toggler
let isToggleShowPosts = true;
let autoShowPosts;
function toggleShowPosts() {
  if (isToggleShowPosts) {
    autoShowPosts = setInterval(showPosts, 1000);
  } else {
    clearInterval(autoShowPosts);
  }
  isToggleShowPosts = !isToggleShowPosts;
}

function showPosts() {
  const numOfFeeds = bacefook.newsfeed.length;
  const numOfDisplayed = containerEl.children.length;
  // console.log(numOfFeeds, numOfDisplayed);

  if (numOfFeeds === numOfDisplayed) {
    return;
  }

  // scroll to top
  // window.scrollTo(pageXOffset, 0);

  // write posts
  for (let index = numOfDisplayed; index < numOfFeeds; index++) {
    const post = bacefook.newsfeed[index];

    // post container
    const postEl = document.createElement('div');
    postEl.className = "post";

    // friend
    const friendEl = document.createElement('div');
    friendEl.className = 'friend';
    const showFeeling = post.feeling ? post.feeling : '...'
    friendEl.innerText = post.friend + ' feels ' + showFeeling;
    // friendEl.innerText += ` [${index+1}]`; // for debugging
    
    // timestamp
    const timeEl = document.createElement('div');
    timeEl.className = 'timestamp';
    timeEl.innerText = convertTimestamp(post.timestamp);
    
    // post
    const textEl = document.createElement('div');
    textEl.className = 'textmsg';
    textEl.innerText = post.text;

    // clone node
    const clnUserIntelEl = userInterEl.cloneNode(true);

    // add image if included
    if (post.image) {
      const imgContEl = document.createElement('div');
      const imgEl = document.createElement('img');
      imgEl.setAttribute('src', post.image);
      imgContEl.appendChild(imgEl)
      postEl.append(friendEl, timeEl, textEl, imgContEl, clnUserIntelEl);
    } else {
      postEl.append(friendEl, timeEl, textEl, clnUserIntelEl);
    }

    containerEl.prepend(postEl);
  }
}
