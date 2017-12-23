function submitPost(event) {
  const postMsgEl = document.getElementById('message');

  // prevent empty posts
  if (!postMsgEl.value) {
    return false;
  }

  const postFeelingEl = document.getElementById('feeling');
  const newPost = {
    friend: username,
    text: postMsgEl.value,
    feeling: postFeelingEl.value,
    image: '',
    timestamp: new Date()
  }
  addPost(newPost);
  postMsgEl.value = ''; // clear
  postFeelingEl.value = '';
  showPosts();
  event.preventDefault(); // prevent page reload (stops bubbling)
}