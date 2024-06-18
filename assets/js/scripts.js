// Scroll-to-top
window.addEventListener('DOMContentLoaded', function() {
  var progressPath = document.querySelector('scroll-to-top path');
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

  function updateProgress() {
    var scroll = document.querySelector('section').scrollTop;
    var height = document.querySelector('section').scrollHeight - document.querySelector('section').clientHeight;
    var progress = pathLength - (scroll * pathLength / height);
    progressPath.style.strokeDashoffset = progress;
  }

  updateProgress();
  document.querySelector('section').addEventListener('scroll', updateProgress);

  var offset = 50;
  var duration = 550;
  document.querySelector('section').addEventListener('scroll', function() {
    if (document.querySelector('section').scrollTop > offset) {
      document.querySelector('scroll-to-top').classList.add('active-progress');
    } else {
      document.querySelector('scroll-to-top').classList.remove('active-progress');
    }
  });
  document.querySelector('scroll-to-top').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('section').scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
