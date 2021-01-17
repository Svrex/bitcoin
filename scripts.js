new Vue({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://blockchain.info/ticker')
      .then(response => (this.info = response))
  }
})