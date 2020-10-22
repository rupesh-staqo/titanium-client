<template>
  <div>
    <li class="nav-item">
      <router-link to="/company" class="nav-link">
        <img src="images/setting.svg" class="menu_icon" />
        <span class="menu-title">Company</span>
      </router-link>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <img src="images/setting.svg" class="menu_icon" />
        <span class="menu-title">Settings</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <img src="images/logout.svg" class="menu_icon" />
        <span class="menu-title">Logout</span>
      </a>
    </li>
  </div>
</template>
<script>
export default {
  name: "MenuItem",
  props: {
    menu: Object,
  },
  data() {
    return {
      is_show: false,
    };
  },
};
</script>