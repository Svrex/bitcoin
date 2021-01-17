<template>
  <div class="content details">
    <h1>Bitcoin Details</h1>
    <div class="content--wrapper">
      <div class="content--boxes">
        <div class="box" v-for="value of info" :key="value.id">
          <h3 class="box--title details">
            <span>{{ value.title }}</span>
          </h3>
          <span class="currency--value details">
            {{ currencyFormat(value.result) }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      // api path with a little config
      info: {
        'totalbc': {
          result: 0,
          'title': 'Anzahl aller Bitcoins im Umlauf',
          'satoshi': true
        },
        'marketcap': {
          result: 0,
          'title': 'Marktkapitalisierung',
          'satoshi': true,
          'currency': 'USD'
        },
        '24hrtransactioncount': {
          result: 0,
          'title': 'Anzahl der Transaktionen in den letzten 24h',
          'satoshi': false
        },
        '24hrbtcsent': {
          result: 0,
          'title': 'Anzahl gesendeter Bitcoin in den letzten 24h',
          'satoshi': true
        },
        'hashrate': {
          result: 0,
          'title': 'Aktuelle Hashrate',
          'satoshi': true
        },
        'getdifficulty': {
          result: 0,
          'title': 'Aktueller Schwierigkeitsgrad',
          'satoshi': true
        },
      },
      errored: false,
    };
  },
  methods: {
    // I use this to pretty up numbers
    currencyFormat(value) {
      return new Intl.NumberFormat('de-DE').format(value);
    }
  },
  mounted() {
    for(const[key, value] of Object.entries(this.info)) {
      axios
        .get('https://blockchain.info/q/' + key)
        .then((response) => {
          // if result is in satoshi we have to divide result by 100000000
          this.info[key]['result'] = this.info[key]['satoshi']?response.data/100000000:response.data;
        })
        .catch((error) => {
          console.log(error)
          this.errored = true
        })
      }
    }
  }
</script>