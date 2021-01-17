<template>
  <div class="content home">
    <h1>Dashboard</h1>
    <div class="content--wrapper">
      <h2>Aktueller Bitcoin-Preis</h2>
      <div class="content--boxes">
        <div class="box">
          <h3 class="box--title">
            <i class="fas fa-shopping-cart"></i>
            <span>Kaufen</span>
          </h3>
          <ul class="currency">
            <li
              v-for="(currency, symbol) of info"
              :key="currency.id"
              v-bind:class="symbol == 'EUR' ? 'eu' : ''"
            >
              <span class="currency--symbol">
                {{ symbol }}
              </span>
              <span class="currency--value">
                {{ currencyFormat(currency.buy, symbol) }}
              </span>
            </li>
          </ul>
        </div>

        <div class="box">
          <h3 class="box--title">
            <i class="fas fa-money-bill-wave"></i>
            <span>Verkaufen</span>
          </h3>
          <ul class="currency">
            <li
              v-for="(currency, symbol) of info"
              :key="currency.id"
              v-bind:class="symbol == 'EUR' ? 'eu' : ''"
            >
              <span class="currency--symbol">
                {{ symbol }}
              </span>
              <span class="currency--value">
                {{ currencyFormat(currency.sell, symbol) }} {{ currency.symbol }}
              </span>
            </li>
          </ul>
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
      info: null,
      loading: true,
      errored: false,
    };
  },
  methods: {
    // I use this to pretty up numbers
    currencyFormat(value, currencyShort) {
      return new Intl.NumberFormat('de-DE', { style: 'currency', currency: currencyShort }).format(value);
    }
  },
  mounted() {
    axios
      .get("https://blockchain.info/ticker")
      .then((response) => {
        this.info = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => {
        this.loading = false;
      });
  },
}
</script>
