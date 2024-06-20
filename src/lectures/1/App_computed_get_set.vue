<template>
	<div>
		<p>{{ firstName }}</p>
		<p>{{ lastName }}</p>
		<h3>풀네임</h3>
		<p>{{ fullName }}</p>

		<button @click="nameChanger">이름바꾸기</button>
	</div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
	setup() {
		const firstName = ref('홍');
		const lastName = ref('길동');
		// const fullName = computed(() => {
		// 	return firstName.value + ' ' + lastName.value;
		// });
		const fullName = computed({
			get() {
				return firstName.value + ' ' + lastName.value;
			},
			set(newName) {
				[firstName.value, lastName.value] = newName.split(' ');
			},
		});
		const nameChanger = () => {
			fullName.value = '김 사랑';
			// firstName.value = '김';
			// lastName.value = '사랑';
		};
		return { firstName, lastName, fullName, nameChanger };
	},
};
</script>

<style lang="scss" scoped></style>
