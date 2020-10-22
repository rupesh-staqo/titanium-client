<template>
  <div class="loader">
    <div class="loader_inner">
        <div class="loader_content"><span class="spinner"></span></div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            default: 'lg'
        }
    }
}
</script>
