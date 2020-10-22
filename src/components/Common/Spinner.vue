<template>
    <b-col cols="12 text-center">
        <img src="@/assets/images/preloader.gif" :style="`width:${width}`"/>
    </b-col>
</template>

<script>
export default {
    props: {
        width: {
            type: String,
            default: '40%'
        }
    }
}
</script>
