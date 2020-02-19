<template>
  <base-layout>
    <v-card>
      <v-card-title>
        <v-icon class="mr-2" color="orange lighten-1">person</v-icon>
        <h2>Profile</h2>
      </v-card-title>
      <v-card-text class="text-left">
        <img class="my_img" src="\img\icons\shirahama-300x300.jpg" width="100" />
        <p>はじめまして。エンジニアの白濵拓輝と申します。</p>
        <p>実務では主にJava、C#でバックエンド開発を担当しています。エンジニアとしてアウトプットの必要性を感じてポートフォリオサイトを作成しました。Firebase、Vue.jsを学習中です。</p>
      </v-card-text>
    </v-card>
  </base-layout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout'
export default {
  components: {
    BaseLayout
  },
  data () {
    return {}
  }
}
</script>

<style>
.my_img {
  border-radius: 50%;
  width: 30vw;
  max-width: 200px;
  /* filter: brightness(0) invert(1); */
}

p {
  font-size: 1rem;
}
</style>
