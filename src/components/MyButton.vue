<template>
	<div>
		<button class="btn btn-primary" type="button" v-bind="$attrs">
			My Button
		</button>
	</div>
</template>

<script>
export default {
	inheritAttrs: false,
	setup(props, { attrs }) {
		console.log(attrs);
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
