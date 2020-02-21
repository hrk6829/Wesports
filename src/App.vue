<template>
  <div id="app">
    <div>
      <v-app>
        <!-- <v-img class="header-img" src="..\\public\\img\\icons\\gaming-pc.jpg"></v-img> -->
        <AppBar></AppBar>
        <v-content class="bg-img">
          <v-container>
            <router-view />
          </v-container>
        </v-content>
      </v-app>
    </div>
  </div>
</template>

<script>
import AppBar from './components/common/AppBar'

export default {
  name: 'App',

  components: {
    AppBar
  },

  data: () => ({
    //
  })
}
</script>

<style scoped>
#app {
  background-color: rgba(238, 238, 238, 0.2);
}
/* .bg-img {
  background-color: #fff;
} */
/* .bg-img {
  background: #fff
    url("..\\public\\img\\icons\\caspar-camille-rubin-oI6zrBj3nKw-unsplash.jpg")
    no-repeat center center;
  background-size: cover;
  z-index: -1;
} */
.header-img {
  background-position: center bottom;
  z-index: -1;
}
</style>
