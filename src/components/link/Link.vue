<template>
  <v-layout wrap>
    <v-flex>
      <v-row justify="center" align-content="center">
        <v-col v-for="(link, i) in links" :key="i" cols="12" sm="10" md="8" lg="4" xl="3">
          <v-card class="card">
            <v-card-title>
              <h4>{{ link.title }}</h4>
            </v-card-title>
            <v-card-text class="text-left">
              <img class="link_img" v-bind:src="link.src" />
              <p class="mt-2">{{link.description}}</p>
            </v-card-text>
            <v-layout justify-center pb-5>
              <v-btn width="80%" color="orange lighten-3" v-bind:href="link.link">
                <v-icon class="mr-2">web</v-icon>このサイトを見る
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
    return {
      links: [
        {
          title: 'amazon',
          description: 'ネット通販サイト世界最大手。1500円以上送料無料が嬉しい通販サイト。攻略本や各種CD、ビデオ、DVD、パソコンソフトやパソコンゲームも豊富に取り揃えている上、売り切れでも在庫さえあれば取り寄せてもらえる。バーゲンコーナーも嬉しい。 また提携企業や個人が出品するマーケットプレイスでは旧世代のソフトが大量にラインナップされている。支払方法はクレジットや代引き、コンビニで買えるAmazonギフトカードによる先払いなど多彩で他の追随を許さない。',
          link: 'https://www.amazon.co.jp/s?k=%E3%82%B2%E3%83%BC%E3%83%A0&__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=156CNBDJZXC4P&sprefix=ge-mu%2Caps%2C250&ref=nb_sb_ss_i_8_5',
          src: '\\img\\icons\\amazon.jpg'
        },
        {
          title: 'NETOFF (BOOKOFF)',
          description: '日本最大の新古書店「ブックオフ」のネット通販。激安ゲームも見ものだが、特に攻略本のラインナップが充実。さすが古本屋といったところだ。1600円以上送料無料',
          link: 'https://www.netoff.co.jp/index.jsp?utm_source=VC_h&utm_medium=af&',
          src: '\\img\\icons\\net-off.png'
        },
        {
          title: 'amazon',
          description: 'ネット通販サイト世界最大手。1500円以上送料無料が嬉しい通販サイト。攻略本や各種CD、ビデオ、DVD、パソコンソフトやパソコンゲームも豊富に取り揃えている上、売り切れでも在庫さえあれば取り寄せてもらえる。バーゲンコーナーも嬉しい。 また提携企業や個人が出品するマーケットプレイスでは旧世代のソフトが大量にラインナップされている。支払方法はクレジットや代引き、コンビニで買えるAmazonギフトカードによる先払いなど多彩で他の追随を許さない。',
          link: 'https://www.amazon.co.jp/s?k=%E3%82%B2%E3%83%BC%E3%83%A0&__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=156CNBDJZXC4P&sprefix=ge-mu%2Caps%2C250&ref=nb_sb_ss_i_8_5',
          src: '\\img\\icons\\amazon.jpg'
        },
        {
          title: 'amazon',
          description: 'ネット通販サイト世界最大手。1500円以上送料無料が嬉しい通販サイト。攻略本や各種CD、ビデオ、DVD、パソコンソフトやパソコンゲームも豊富に取り揃えている上、売り切れでも在庫さえあれば取り寄せてもらえる。バーゲンコーナーも嬉しい。 また提携企業や個人が出品するマーケットプレイスでは旧世代のソフトが大量にラインナップされている。支払方法はクレジットや代引き、コンビニで買えるAmazonギフトカードによる先払いなど多彩で他の追随を許さない。',
          link: 'https://www.amazon.co.jp/s?k=%E3%82%B2%E3%83%BC%E3%83%A0&__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=156CNBDJZXC4P&sprefix=ge-mu%2Caps%2C250&ref=nb_sb_ss_i_8_5',
          src: '\\img\\icons\\amazon.jpg'
        },
        {
          title: 'amazon',
          description: 'ネット通販サイト世界最大手。1500円以上送料無料が嬉しい通販サイト。攻略本や各種CD、ビデオ、DVD、パソコンソフトやパソコンゲームも豊富に取り揃えている上、売り切れでも在庫さえあれば取り寄せてもらえる。バーゲンコーナーも嬉しい。 また提携企業や個人が出品するマーケットプレイスでは旧世代のソフトが大量にラインナップされている。支払方法はクレジットや代引き、コンビニで買えるAmazonギフトカードによる先払いなど多彩で他の追随を許さない。',
          link: 'https://www.amazon.co.jp/s?k=%E3%82%B2%E3%83%BC%E3%83%A0&__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=156CNBDJZXC4P&sprefix=ge-mu%2Caps%2C250&ref=nb_sb_ss_i_8_5',
          src: '\\img\\icons\\amazon.jpg'
        },
        {
          title: 'amazon',
          description: 'ネット通販サイト世界最大手。1500円以上送料無料が嬉しい通販サイト。攻略本や各種CD、ビデオ、DVD、パソコンソフトやパソコンゲームも豊富に取り揃えている上、売り切れでも在庫さえあれば取り寄せてもらえる。バーゲンコーナーも嬉しい。 また提携企業や個人が出品するマーケットプレイスでは旧世代のソフトが大量にラインナップされている。支払方法はクレジットや代引き、コンビニで買えるAmazonギフトカードによる先払いなど多彩で他の追随を許さない。',
          link: 'https://www.amazon.co.jp/s?k=%E3%82%B2%E3%83%BC%E3%83%A0&__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=156CNBDJZXC4P&sprefix=ge-mu%2Caps%2C250&ref=nb_sb_ss_i_8_5',
          src: '\\img\\icons\\amazon.jpg'
        }
      ]
    }
  }
}
</script>

<style>
.link_img {
  width: 30vw;
  max-width: 300px;
  min-width: 200px;
}
@media (min-width: 1280px) {
  .card {
    height: 55vh;
  }
}
</style>
