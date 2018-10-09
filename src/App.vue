<template>
  <div id="app">
      <div class='header'>
        <img src="./assets/img/logo.jpg" alt="">
        <router-link to="/find">发现音乐</router-link>
        <router-link to="/my">我的音乐</router-link>
        <router-link to="/friend">朋友</router-link>
        <router-link to="/shop">商城</router-link>
        <router-link to="/musician">音乐人</router-link>
        <router-link to="/download">下载客户端</router-link>       
        <img src="./assets/img/search.jpg" alt="">
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "app"
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.header {
  height: 70px;
  background-color: #242424;
  text-align: center;
}

img {
  vertical-align: middle;
}

.header a {
  line-height: 70px;
  color: #ccc;
  display: inline-block;
  text-decoration: none;
  font-size: 14px;
  padding: 0 10px;
}

.router-link-active {
  background-color: black;
  color: white;
  text-shadow: 0 0 10px green;
}
.music-box,
.weather-box {
  border: 10px solid white;
  background-color: skyblue;
  width: 500px;
}

input {
  height: 40px;
  border-radius: 10px;
  width: 80%;
  margin: 0 auto;
  display: block;
  font-size: 20px;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter,
        .list-leave-to

        /* .list-leave-active for below version 2.1.8 */
 {
  opacity: 0;
  transform: translateX(100px);
}
</style>
