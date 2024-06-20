<template>
	<div>
		<p>강의가 존재합니까?</p>
		<span>{{ hasLecture }}</span>
		<div>{{ existLecture() }}</div>
	</div>
</template>

<script>
import { computed, reactive } from 'vue';

export default {
	setup() {
		const teacher = reactive({
			name: '이름인듯',
			lectures: ['html/css', 'javascript', 'vue3'],
		});
		const hasLecture = computed(() => {
			return teacher.lectures.length > 0 ? '예' : '아니요';
		});
		const existLecture = () => {
			return teacher.lectures.length > 0 ? 'Yes' : 'No';
		};

		return { teacher, hasLecture, existLecture };
	},
};
</script>

<style lang="scss" scoped></style>
