document.getElementById('enter-btn').addEventListener('click', function() {
  document.querySelector('.landing').style.display = 'none';
  document.querySelector('.main-content').style.display = 'block';

  // Initialize the title animation after showing the main content
  const title = document.querySelector('.title');
  const text = 'Hope you like it'.split('');
  for (let index = 0; index < text.length; index++) {
    if (text[index] !== ' ') {
      title.innerHTML += `<span>${text[index]}<span/>`
    } else {
      title.innerHTML += `<span style='margin-right: 20px;'><span/>`
    }
  }

  const textElements = document.querySelectorAll('.title span');
  textElements.forEach((element) => {
    const randomDelay = Math.random() * 3;
    element.style.animationDelay = `${randomDelay}s`;
  });
});
