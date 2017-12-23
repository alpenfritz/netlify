window.onload = () => {

  // this is a very simple check to see if there's a username stored
  if (!localStorage.getItem('username')) {
    // prompt for one from user if not
    window.username = window.prompt('What is your name?');
    localStorage.setItem('username', username);
  } else {
    window.username = localStorage.getItem('username');
  }

  // show current user & create user in bacefook obj
  document.getElementById('currentUser').innerText = window.username;
  bacefook.friends[window.username] = [];

  // newsfeed update event
  const refreshBtn = document.querySelector('#refresh');
  // refreshBtn.addEventListener('click', showPosts);
  refreshBtn.addEventListener('click', toggleShowPosts);
  refreshBtn.addEventListener('click', () => {
    refreshBtn.classList.toggle('selected');
  });

  // populate dropdown with feeling options
  const feelingDrpDn = document.getElementById('feeling');
  allFeelings.forEach(emotion => {
    if (!emotion) {
      return;
    }
    const option = document.createElement('option');
    option.setAttribute('value', emotion);
    option.innerText = emotion;
    feelingDrpDn.add(option);
  })

  // custom message form submission event
  const messageForm = document.getElementById('form');
  messageForm.onsubmit = submitPost;

  // initial running
  showPosts();
  toggleShowPosts();
};
