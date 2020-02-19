<template>
  <v-layout wrap>
    <v-flex>
      <v-row justify="center" align-content="center">
        <v-col v-for="n in 8" :key="n" cols="12" sm="10" md="8" lg="4" xl="3">
          <v-card>
            <v-card-title>
              <h4>Logicool G ゲーミングマウス ワイヤレス G703h ブラック</h4>
            </v-card-title>
            <v-card-text class="text-left">
              <img class="my_img" src="\img\icons\51PFaaMj60L._SL1024_.jpg" />
              <p class="price">￥7,900</p>
            </v-card-text>
            <v-layout justify-center pb-5>
              <v-btn
                width="80%"
                color="orange lighten-3"
                href="https://www.amazon.co.jp/Logicool-G703h-LIGHTSPEED-HERO16K%E3%82%BB%E3%83%B3%E3%82%B5%E3%83%BC-LIGHTSYNC/dp/B07SYKKP47"
              >
                <v-icon class="mr-2">shopping_cart</v-icon>商品ページを見る
              </v-btn>
            </v-layout>
          </v-card>
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {
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
  max-width: 250px;
  min-width: 150px;
}
.price {
  font-size: 2rem;
  color: #b12704;
  text-align: right;
}
.container {
  padding: 0px;
}
</style>
