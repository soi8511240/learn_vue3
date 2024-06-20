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
console.log('normal script');
</script>
<script setup>
console.log('script setup');
import { ref, computed } from 'vue';

const props = defineProps({
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
});
const emits = defineEmits(['toggleLike']);

const isLikeClass = computed(() =>
	props.isLike ? 'btn-danger' : 'btn-outline-danger',
);
const typeName = computed(() => (props.type === 'news' ? '뉴스' : '공지사항'));
// const style = useCssModule();

const colorValue = ref('red'); // css not module
colorValue.value = 'blue';

const toggleLike = () => {
	emits('toggleLike');
};
</script>

<style>
.red {
	color: v-bind(colorValue) !important;
}
</style>
