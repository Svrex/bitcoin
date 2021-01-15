<template>
<div id="app">
    <div class="navigation__bar">
      <div class="logo">
        <i class="fab fa-2x fa-bitcoin"></i>
        <div class="logo__text">
          <span class="logo__text--left">Bit</span>
          <span class="logo__text--right">Coin</span>
        </div>
      </div>
      <div id="nav">
        <router-link to="/">
          <span class="nav--title"><i class="fas fa-tachometer-alt"></i>Dashboard</span>
        </router-link>
        <router-link to="/details">
         <span class="nav--title"><i class="fas fa-info-circle"></i>Bitcoin Details</span>
        </router-link>
        <router-link to="/calc">
          <span class="nav--title"><i class="fas fa-calculator"></i>Bitcoin Umrechner</span>
        </router-link>
        <router-link to="/graph">
          <span class="nav--title"><i class="fas fa-chart-line"></i>Bitcoin Diagramm</span>
        </router-link>
        <router-link to="/user">
          <span class="nav--title"><i class="fas fa-user"></i>Meine Bitcoin</span>
        </router-link>
      </div>
    </div>
    <router-view/>
</div>
</template>

<style lang="scss">
  @import './public/style.scss';
</style>
