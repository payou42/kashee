<template>
  <div>
    <h2>Portrait editor</h2>
    <input ref="localFile" @change="imageSelected" type="file" />
    <img class="portrait" :src="picture" />
  </div>
</template>
<script>
export default {
  name: 'kashee-wizard-portrait',

  data () {
    return {
      imageUrl: null
    }
  },

  computed: {
    civilStatus: function () {
      if (this.$store.state.character.current) {
        return this.$store.state.character.current.civilStatus
      }
      return null
    },
    picture: {
      get: function () {
        return this.civilStatus.picture
      },
      set: function (value) {
        this.$store.dispatch('character/update', {
          civilStatus: {
            ...this.civilStatus,
            picture: value
          }
        })
      }
    }
  },

  methods: {
    imageSelected: function (event) {
      const value = event.target.files[0]
      let reader = new FileReader()
      reader.readAsDataURL(value)
      reader.onload = () => {
        this.picture = reader.result
      }
      reader.onerror = (error) => {
        console.log('Error: ', error)
      }
    }
  }
}
</script>
<style scoped>
  .portrait {
    max-height: 300px;
    max-width: 50vw;
  }
</style>

