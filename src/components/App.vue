<template>
  <v-app id="app" light>
    <kashee-header></kashee-header>
    <v-layout class="mt-1" >
      <v-flex>
        <kashee-nav></kashee-nav>
      </v-flex>
      <v-flex>
        <main>
          <v-container fluid>
            <v-slide-y-transition mode="out-in">
              <router-view></router-view>
            </v-slide-y-transition>
          </v-container>
          <kashee-message></kashee-message>
        </main>
      </v-flex>  
    </v-layout> 
  </v-app>
</template>

<script>
import KasheeHeader from '@/components/layout/KasheeHeader.vue'
import KasheeNav from '@/components/layout/KasheeNav.vue'
import KasheeMessage from '@/components/layout/KasheeMessage.vue'
export default {
  name: 'app',
  components: {
    KasheeHeader,
    KasheeNav,
    KasheeMessage
  }
}
</script>

<style lang="stylus">
  @import '../stylus/main'

  html, body
    overflow hidden

  .application main .container
    min-height auto
    height auto

  code
    font-family 'Handlee', cursive
    font-weight 400 !important
    font-size 1em
    background-color #fafafa
    color black

  code strong
    font-weight 600 !important

</style>
