<template>
  <div class="home">
    <HomeBanner message="ゲーミングデバイス情報サイト
    Wesports" />
    <HomeGoods />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeBanner from '@/components/home/HomeBanner.vue'
import HomeGoods from '@/components/home/HomeGoods.vue'

export default {
  name: 'home',
  components: {
    HomeBanner,
    HomeGoods
  }
}
</script>
