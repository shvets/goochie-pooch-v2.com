<template>
  <AppLayout>
    <h1>Grooming Tips</h1>
  </AppLayout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import AppLayout from '../components/layout/AppLayout.vue';

const components = {
  AppLayout
};

@Component({
  components
})
export default class GroomingTipsPage extends Vue {
}
</script>

