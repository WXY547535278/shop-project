<template>
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='max'>
	    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
	    <input id="test" class="mui-input-numbox" type="number"
        @change="countChanged" ref="numbox" value="1"/>
	    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
</template>
<script>
import mui from "../../lib/mui/js/mui"
export default {
    mounted() {
        mui(".mui-numbox").numbox();
    },
    methods: {
        countChanged() {
            // console.log(this.$refs.numbox.value);
            this.$emit("getcount",parseInt(this.$refs.numbox.value));
        }
    },
    props: ["max"],
    watch: {
        'max': function(newVal, oldVal) {
            //这是mui里面一个设置最大值的方法
            mui(".mui-numbox").numbox().setOption("max", newVal);
        }
    },
}
</script>
<style lang="scss" scoped>

</style>
