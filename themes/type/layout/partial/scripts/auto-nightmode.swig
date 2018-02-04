{%- if theme.night_mode.auto -%}
<script>
(function() {
  function isDefaultNight() {
    var rootClass = document.documentElement.className;
    return rootClass.indexOf("night-mode") > -1;
  }

  function isNight() {
    var hour = (new Date()).getHours();
    var isNightTime = hour < 6 || hour > 21;
    return isNightTime;
  }

  if (!isDefaultNight()) {
    if (isNight()) {
      document.documentElement.classList.add('night-mode');
    } else {
      document.documentElement.classList.remove('night-mode');
    }
  }
}());
</script>
{% endif %}
