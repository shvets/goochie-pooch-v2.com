<template>
  <div class="nav header">
    <div class="company-title">
      Goochie Pooch & Cats Too
    </div>

    <div class="facebook">
      <a href="https://www.facebook.com/goochie.pooch" target="parent">
        <img class="facebook-logo" src="../../assets/images/facebook.png" alt="" title="Visit us on facebook">
      </a>
    </div>

    <ThemeControl ref="themeControl" :theme="currentTheme" @change="onThemeChange"/>
  </div>
</template>

<script lang="ts">
import Component, {mixins} from 'vue-class-component';

import {AppThemeMixin} from '@/mixins/app-theme-mixin';

import ThemeControl from './ThemeControl.vue';

const components = {
  ThemeControl
};

@Component({ components })
export default class AppLayout extends mixins(AppThemeMixin) {}
</script>

<style lang="scss" scoped>
.facebook {
  /*width: 10rem;*/
  /*display: flex;*/
  /*align-items: center;*/
  /*justify-content: space-around;*/
}

.facebook-logo {
  width: 2rem;
  height: auto;
}
</style>
