<template>
	<div>
		<LabelInput
			:model-value="firstname"
			@update:modelValue="value => $emit('update:firstname', value)"
			label="성"
		/>
		<LabelInput
			:model-value="lastname"
			@update:modelValue="value => $emit('update:lastname', value)"
			label="이름"
		/>
	</div>
</template>

<script>
import LabelInput from './LabelInput.vue';

export default {
	props: ['firstname', 'lastname'],
	emits: ['update:firstname', 'update:lastname'],
	components: {
		LabelInput,
	},
	setup() {
		return {};
	},
};
</script>
