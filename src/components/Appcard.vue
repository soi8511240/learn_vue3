<template>
	<div class="card">
		<div v-if="$slots.header" class="card-header">
			<slot name="header">#Header</slot>
		</div>
		<div v-if="$slots.default" class="card-body">
			<slot :child-message="childMessage" :hello-message="helloMessage"
				>#body</slot
			>
		</div>
		<div v-if="hasFooter" class="card-footer text-body-secondary">
			<slot name="footer">#Footer</slot>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';
import { computed } from 'vue';
export default {
	setup(props, { slots }) {
		const childMessage = ref('자식 메세지');
		const helloMessage = ref('HI!');
		const hasFooter = computed(() => !!slots.footer);
		return { childMessage, helloMessage, hasFooter };
	},
};
</script>

<style lang="scss" scoped></style>
