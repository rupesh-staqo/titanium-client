<template>
  <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
      <router-link class="navbar-brand brand-logo" to="">
        <img src="@/assets/images/logo.png" class="mr-2" alt="logo" />
      </router-link>
      <router-link to="" class="navbar-brand brand-logo-mini">
        <img src="@/assets/images/logo.png" alt="logo" />
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
      <!-- <ul class="navbar-nav mr-lg-2">
        <li class="nav-item nav-search d-none d-lg-block">
          <div class="input-group">
            <div class="input-group-prepend hover-cursor" id="navbar-search-icon">
              <span class="input-group-text" id="search">
                <i class="ti-search"></i>
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              id="navbar-search-input"
              placeholder="Search now"
              aria-label="search"
              aria-describedby="search"
            />
          </div>
        </li>
      </ul> -->
      <ul class="navbar-nav navbar-nav-right">
        <li :class="`nav-item nav-profile dropdown ${is_profile_open?'show' : ''}`">
          <a
            class="nav-link dropdown-toggle"
            @click="is_profile_open = !is_profile_open"
            href="#"
            data-toggle="dropdown"
            id="profileDropdown"
          >
            <img src="@/assets/images/logo.png" alt="profile" />
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