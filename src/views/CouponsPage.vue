<template>
  <AppLayout>
    <p>
      <router-link to="print-coupon">Print Coupon</router-link>
    </p>
    <Coupon/>
  </AppLayout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import AppLayout from '../components/layout/AppLayout.vue';
import Coupon from '@/components/Coupon.vue';

const components = {
  AppLayout,
  Coupon
};

@Component({
  components
})
export default class CouponsPage extends Vue {
}
</script>
