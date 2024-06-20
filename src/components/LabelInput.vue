<template>
	<label class="child-class" style="border: 1px solid #000" id="child-id">
		{{ label }}
		<!-- 
			:value="modelValue"
			@input="e => $emit('update:modelValue', e.target.value)"
		-->
	</label>
	<input type="text" v-model="value" />
</template>

<script>
import { computed } from 'vue';
export default {
	props: ['modelValue', 'label'],
	emits: ['update:modelValue'],
	setup(props, { emit }) {
		const value = computed({
			get() {
				return props.modelValue;
			},
			set(value) {
				emit('update:modelValue', value);
			},
		});
		return { value };
	},
};
</script>

<style lang="scss" scoped></style>
