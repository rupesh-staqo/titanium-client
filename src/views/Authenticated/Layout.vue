<template>
  <div class="container-scroller" :class="!is_dawer_open?'sidebar-icon-only' : ''">
    <Header @drawer="drawer" />
    <div class="container-fluid page-body-wrapper">
      <Spinner v-if="loading" width="30%" />
      <template v-else>
      <Sidebar :is_dawer_open="is_dawer_open" :loading="loading"/>
      <div class="main-panel">
        <router-view />
        <Footer/>
      </div>
      </template>
    </div>
  </div>
</template>


<script>
import Header from "@/components/Authenticated/Header";
import Sidebar from "@/components/Authenticated/Sidebar";
import Footer from "@/components/Authenticated/Footer";
export default {
  name: 'Layout',
  props: {
    source: String
  },
  components: {
    Header,
    Sidebar,
    Footer
  },
  data: () => ({
    dialog: false,
    is_dawer_open: true,
    loading: false
  }),
  methods: {
    drawer: function(newValue) {
      this.is_dawer_open = newValue;
    }
  },
  async created() {
    this.loading = true;
    // await this.$store.dispatch("fetchMenus");
    this.loading = false;
  }
};
</script>
