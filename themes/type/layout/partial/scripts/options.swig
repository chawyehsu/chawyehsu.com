<script>
(function() {
  function toggleMode() {
    var rootClass = document.documentElement.className;
    if (rootClass.indexOf('night-mode') > -1) {
      document.documentElement.classList.remove('night-mode');
    } else {
      document.documentElement.classList.add('night-mode');
    }
  }

  function toggleFont() {
    var rootClass = document.documentElement.className;
    if (rootClass.indexOf('serif') > -1) {
      document.documentElement.classList.remove('serif');
    } else {
      document.documentElement.classList.add('serif');
    }
  }

  var changeMode = document.getElementsByClassName('change-mode')[0];
  var changeFont = document.getElementsByClassName('change-font')[0];

  changeMode.addEventListener('click', toggleMode, false);
  changeFont.addEventListener('click', toggleFont, false);
}());
</script>
