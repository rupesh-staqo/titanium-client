<template>
  <nav :class="`sidebar sidebar-offcanvas ${is_dawer_open?'active':''}`" id="sidebar">
    <ul class="nav">
      <MenuItem />
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import MenuItem from "../Authenticated/MenuItem"
export default {
  name: "Sidebar",
  props: {
    is_dawer_open: {
      type: Boolean,
      default: false
    }
  },
  components:{
    MenuItem
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters([
      'menus',
    ])
  }
};
</script>