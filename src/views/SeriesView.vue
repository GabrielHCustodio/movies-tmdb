<template>
    <header-app />
    <series />
</template>

<script>
import HeaderApp from '@/components/HeaderApp.vue'
import Series from '@/components/Series.vue'

export default {
    name: 'SeriesView',
    components: {
        HeaderApp,
        Series
    }
}
</script>