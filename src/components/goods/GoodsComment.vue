<template>
    <div>
        <comments :id="goodCid"></comments>
    </div>
</template>
<script>
import comments from "../subcomponents/comment"
export default {
    data() {
        return {
            goodCid: this.$route.params.id
        }
    },
    components: {
        "comments": comments
    }
}
</script>
<style lang="">
    
</style>