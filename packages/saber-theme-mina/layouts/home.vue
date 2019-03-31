<template>
  <div class="frontpage">
    <div class="frontpage-content">
      <saber-link :to="'/about.html'" class="avatar" >
        <img :src="$siteConfig.avatar" alt="avatar" />
      </saber-link>
      <h1 class="name" title="Chawye Hsu">h404bi</h1>
      <div class="slogan" title="Thank you GARNET CROW since 2009">
        <a href="https://www.bilibili.com/video/av1021686/" target="_blank">There will still be love in this world</a>
      </div>
      <hr>
      <div class="menu">
        <saber-link :to="'/blog'" title="Bloggin'">Blog</saber-link>
        <a href="https://github.com/h404bi" title="Coding..." target="_blank">GitHub</a>
        <a href="https://steamcommunity.com/id/h404bi" title="Gaming..." target="_blank">Steam</a>
        <a href="http://music.163.com/#/user/home?id=35631431" title="besides GC, EDM" target="_blank">Music</a>
      </div>
      <div class="location">Guangzhou, China</div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.$siteConfig.title}`
    }
  }
}
</script>

<style scoped>
@font-face {
	font-family: 'Covered By Your Grace';
  font-style: normal;
  font-weight: 400;
  src: local('Covered By Your Grace'), local('CoveredByYourGrace'),
    url(https://fonts.gstatic.com/s/coveredbyyourgrace/v6/6ozZp4BPlrbDRWPe3EBGAwKD8TGKVoQOpaI5rf69M8iglnMp3_3A8V8Ai8YosRtX.woff2) format('woff2');
    unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2212,U+2215;
}

.frontpage {
	width: 100vw;
	height: 100vh;
  display: flex;
	align-items: center;
	justify-content: center;
  line-height: 1.15;
}

.frontpage-content {
	text-align: center
}

.avatar img {
	width: 100px;
	height: 100px;
	border-radius: 50%;
	object-fit: cover;
}

h1 {
	font-size: 38px;
	font-family: 'Covered By Your Grace' !important;
	font-weight: 400;
	margin: 8px 0;
}

.slogan {
	font-size: 16px;
	margin-bottom: 16px;
}

hr {
	max-width: 400px;
	height: 1px;
	border: none;
	background-image: linear-gradient(0deg, transparent, #d5d5d5, transparent);
	background-image: -webkit-linear-gradient(0deg, transparent, #d5d5d5, transparent);
}

.menu {
	font-size: 14px;
	margin: 16px 0;
}

.menu a+a {
	margin-left: 8px;
}

.location {
	font-size: 12px;
}
</style>
