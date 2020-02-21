<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex>
        <router-link to="/" tag="div">
          <div class="home-img">
            <p class="home-img-text white--text">{{message}}</p>
          </div>
        </router-link>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['message'],
  data: () => ({
  })
}
</script>

<style scoped>
.home-img {
  height: 25vh;
  background: #fff url("..\\..\\..\\public\\img\\icons\\gaming-pc.jpg")
    no-repeat center center;
  background-size: cover;
  position: relative;
}
.home-img-text {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  top: 0;
  font-size: 3vw;
  white-space: pre-wrap;
}
@media (max-width: 640px) {
  .home-img {
    height: 10vh;
  }
  .home-img-text {
    font-size: 15px;
  }
}
@media (min-width: 1280px) {
  .home-img {
    height: 45vh;
  }
  .home-img-text {
    font-size: 50px;
  }
}
</style>
