<template>
  <div>
    <li class="nav-item">
      <router-link to="/company" class="nav-link">
        <img src="@/assets/images/car.png" class="menu_icon" />
        <span class="menu-title">Company</span>
      </router-link>
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