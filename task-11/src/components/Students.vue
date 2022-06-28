<template>
    <div id="student">
        <slot name="head"></slot>
        <form action="">
            <div id="form-header">
                <slot name="form-header"></slot>
            </div>
            <div id="form-element">
                <slot name="form-element"></slot>
            </div>
            <div id="form-button">
                <slot name="form-button"></slot>
            </div>
            <div id="form-footer">
                <slot name="form-footer"></slot>
            </div>
        </form>
    
      
    </div>
</template>

<script>

export default {

    name:'Student'
}
</script>

<style scoped>

</style>