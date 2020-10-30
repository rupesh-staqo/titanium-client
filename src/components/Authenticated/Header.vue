<template>
  <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
      <router-link class="navbar-brand brand-logo" to="">
        <div class="mr-2">AutoCarz</div>
      </router-link>
      <router-link to="" class="navbar-brand brand-logo-mini">
        <div class="mr-2">AC</div>
      </router-link>
    </div>
    <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
      <button
        class="navbar-toggler navbar-toggler align-self-center"
        v-on:click="drawer = !drawer"
        type="button"
        data-toggle="minimize"
      >
        <span class="ti-menu"></span>
      </button>
      <ul class="navbar-nav navbar-nav-right">
        <li :class="`nav-item nav-profile dropdown ${is_profile_open?'show' : ''}`">
          <a
            class="nav-link dropdown-toggle"
            @click="is_profile_open = !is_profile_open"
            href="#"
            data-toggle="dropdown"
            id="profileDropdown"
          >
            <div>AutoCarz</div>
          </a>
          <div
            :class="`dropdown-menu dropdown-menu-right navbar-dropdown ${is_profile_open? 'show' :''}`"
            aria-labelledby="profileDropdown"
          >
            <a class="dropdown-item" @click="logout">
              <i class="ti-power-off text-primary"></i>
              Logout
            </a>
          </div>
        </li>
      </ul>
      <button
        class="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
        v-on:click="drawer = !drawer"
        type="button"
        data-toggle="offcanvas"
      >
        <span class="ti-view-list"></span>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      is_quickaccess_open: false,
      is_notification_open: false,
      is_profile_open: false,
      drawer: true
    };
  },
  watch: {
    drawer: function(newValue) {
      this.$emit("drawer", newValue);
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('AUTH_LOGOUT');
    }
  }
};
</script>