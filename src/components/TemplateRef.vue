<template>
	<div class="container py-7">
		<input ref="input" type="text" />
		<p>{{ input }}</p>
		<p v-if="input">
			{{ input.value }},{{ $refs.input.value }},{{
				$refs.input === input
			}}
		</p>
		<ul>
			<!-- <li v-for="(fruit, index) in fruits" :key="index" ref="itemRefs">
				{{ fruit }}
			</li> -->
			<li
				v-for="(fruit, index) in fruits"
				:key="index"
				:ref="el => itemRefs.push(el.textContent)"
			>
				{{ fruit }}
			</li>
		</ul>
	</div>
</template>

<script>
import { onMounted, ref } from 'vue';
export default {
	setup() {
		const input = ref(null);
		console.log('setup:', input.value);

		onMounted(() => {
			input.value.value = 'Hello!';
			console.log('onMounted:', input.value);

			// itemRefs.value.forEach(item =>
			// 	console.log('item: ', item.textContent),
			// );
			itemRefs.value.forEach(item => console.log('item: ', item));
		});

		const fruits = ref(['사과', '딸기', '배']);
		const itemRefs = ref([]);

		return { input, fruits, itemRefs };
	},
};
</script>

<style lang="scss" scoped></style>
