<template>
	<div class="header">
		<slot name="header"></slot>
	</div>
	<div class="contacts" v-if="$slots.contacts">
		<slot name="contacts"></slot>
	</div>
</template>

<script>

export default {
	name: 'TopPanel'
}
</script>
  
<style scoped lang="scss">
.contacts {
	margin-top: 44px;
}

.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>