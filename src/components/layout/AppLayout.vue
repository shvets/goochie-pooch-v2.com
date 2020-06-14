<template>
  <Layout class="app-layout">
    <template #header>
      <Header/>
    </template>

    <div class="main">
      <Split direction="horizontal" :gutter-size="0">
        <SplitArea :size="25">
          <Menu/>
        </SplitArea>

        <SplitArea :size="75">
          <slot />
        </SplitArea>

        <!--      <SplitArea :size="20">-->
        <!--        <Sidebar/>-->
        <!--      </SplitArea>-->
      </Split>
    </div>

    <template #footer>
      <Footer/>
    </template>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import '../../plugins';

import '../../assets/styles/index.scss';

import Layout from './Layout.vue';
import Header from './Header.vue';
import Menu from './Menu.vue';
import Footer from './Footer.vue';

const components = {
  Layout,
  Header,
  Menu,
  Footer
};

@Component({ components })
export default class AppLayout extends Vue {
}
</script>
