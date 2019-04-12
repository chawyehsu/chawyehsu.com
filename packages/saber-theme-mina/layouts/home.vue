<template>
  <div class="frontpage">
    <div class="frontpage-content">
      <saber-link class="avatar"
        v-if="$themeConfig.home.avatarLink"
        :to="$themeConfig.home.avatarLink">
        <img :src="$themeConfig.home.avatar" alt="avatar"/>
      </saber-link>
      <div v-else class="avatar">
        <img :src="$themeConfig.home.avatar" alt="avatar"/>
      </div>
      <h1 class="name">{{ $siteConfig.author }}</h1>
      <div class="slogan" :title="$themeConfig.home.slogan.title">
        <a
          v-if="$themeConfig.home.slogan.path"
          :href="$themeConfig.home.slogan.path" target="_blank" rel="noopener">
          {{ $themeConfig.home.slogan.name }}
        </a>
        <span v-else>{{ $themeConfig.home.slogan.name }}</span>
      </div>
      <hr>
      <ul class="menu">
        <li v-for="(item, index) in $themeConfig.home.menu" :key="index">
          <saber-link v-if="item.path.indexOf('/') === 0" :to="item.path">
            <a :href="item.path" :title="item.title">{{ item.name }}</a>
          </saber-link>
          <a v-else
            :href="item.path"
            :title="item.title"
            target="_blank" rel="noopener">{{ item.name }}</a>
        </li>
      </ul>
      <div class="location">{{ $themeConfig.home.location }}</div>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: this.$siteConfig.title,
      meta: [
        {
          name: 'description',
          content: this.$siteConfig.description
        }
      ]
    }
  }
}
</script>

<style scoped>
@font-face {
	font-family: 'Covered By Your Grace';
  font-style: normal;
  font-weight: 400;
  src: local('Covered By Your Grace'), local('CoveredByYourGrace'), url(https://fonts.gstatic.com/s/coveredbyyourgrace/v6/6ozZp4BPlrbDRWPe3EBGAwKD8TGKVoQOpaI5rf69M8iglnMp3_3A8V8Ai8YosRtX.woff2) format('woff2');
    unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2212,U+2215;
    font-display: swap;
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
  display: flex;
  justify-content: center;
  list-style-type: none;
	font-size: 14px;
	margin: 16px 0;
}

.menu li {
	margin: 0 4px;
}

.location {
	font-size: 12px;
}
</style>
