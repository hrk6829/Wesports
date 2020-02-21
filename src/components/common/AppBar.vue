<template>
  <div>
    <v-app-bar app color="Black" dark>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="title">
        <router-link to="/" tag="div">
          Wesports
          <v-icon>videogame_asset</v-icon>
        </router-link>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="d-none d-md-block">
        <v-btn text to="/goods">商品</v-btn>
        <v-btn text to="/link">リンク</v-btn>
        <v-btn text to="/movie">動画</v-btn>
        <v-btn text to="/qa">Q&A</v-btn>
        <v-btn text to="/contact">お問い合わせ</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <!-- <v-app-bar app color="Black" dark bottom>
      <v-spacer />
      <v-toolbar-items>
        <v-btn text to="/profile">商品</v-btn>
        <v-btn text to="/skill">ニュース</v-btn>
        <v-btn text to="/work">動画</v-btn>
        <v-btn text to="/contact">Q&A</v-btn>
        <v-btn text to="/myapp">お問い合わせ</v-btn>
      </v-toolbar-items>
      <v-spacer />
    </v-app-bar>-->
    <v-navigation-drawer v-model="drawer" absolute left temporary dark>
      <v-list nav dense>
        <v-list-item-group active-class="text--accent-4">
          <router-link to="/goods">
            <v-list-item>
              <!-- <v-icon class="mr-2">code</v-icon> -->
              <v-list-item-title>商品</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/link">
            <v-list-item>
              <!-- <v-icon class="mr-2">code</v-icon> -->
              <v-list-item-title>リンク</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/movie">
            <v-list-item>
              <!-- <v-icon class="mr-2">work</v-icon> -->
              <v-list-item-title>動画</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/qa">
            <v-list-item>
              <!-- <v-icon class="mr-2">apps</v-icon> -->
              <v-list-item-title>Q&A</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/contact">
            <v-list-item>
              <!-- <v-icon class="mr-2">mail</v-icon> -->
              <v-list-item-title>お問い合わせ</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: null
    }
  },
  created () { },
  methods: {}
}
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
</style>
