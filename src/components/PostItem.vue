<template>
	<div class="card">
		<div class="card-body">
			<!-- type : news, notice -->
			<span class="badge text-bg-secondary">{{ typeName }}</span>
			<h5 class="card-title mt-2">{{ title }}</h5>
			<p class="card-text">
				{{ content }}
			</p>
			<a
				href="#"
				class="btn"
				:class="isLikeClass"
				@click.prevent="toggleLike"
				>좋아요</a
			>
		</div>
	</div>
</template>

<script>
import { ref, computed } from 'vue';
// console.log('AppCard module');

export default {
	props: {
		type: {
			type: String,
			default: 'news',
			validator: value => {
				return ['news', 'notice'].includes(value);
			},
		},
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			// required: true,
		},
		isLike: {
			type: Boolean,
			default: false,
		},
		obj: {
			type: Object,
			default: () => ({}),
		},
	},
	emits: ['toggleLike'],
	setup(props, context) {
		const isLikeClass = computed(() =>
			props.isLike ? 'btn-danger' : 'btn-outline-danger',
		);
		const typeName = computed(() =>
			props.type === 'news' ? '뉴스' : '공지사항',
		);
		// const style = useCssModule();

		const colorValue = ref('red'); // css not module
		colorValue.value = 'blue';

		const toggleLike = () => {
			context.emit('toggleLike');
		};
		// console.log(`style : `, style);
		// console.log('AppCard setup();');
		return { colorValue, isLikeClass, typeName, toggleLike };
	},
};
</script>

<style>
.red {
	color: v-bind(colorValue) !important;
}
</style>
<!-- <style module="classes">
.red {
	color: #f40;
}
</style> -->

<!-- <style scoped>
.red {
	color: #f40;
}
</style> -->
