<template>
	<div class="row g-3">
		<div class="col col-2">
			<select
				v-model="type"
				class="form-select"
				aria-label="Default select example"
			>
				<option value="news" selected>뉴스</option>
				<option value="notice">공지사항</option>
			</select>
		</div>
		<div class="col col-8">
			<input type="text" class="form-control" v-model="title" />
		</div>
		<div class="col col-2 d-grid">
			<button class="btn btn-primary" @click="createPost">추가</button>
		</div>

		<!-- <button
			class="btn btn-primary"
			@click="$emit('createPost', 1, 2, 3, 'String')"
		>
			button
		</button> -->
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	// emits: ['createPost'],
	emits: {
		// createPost:null,
		createPost: newPost => {
			console.log('validation: ', newPost);
			if (!newPost.title) {
				return false;
			} else if (!newPost.content) {
				return false;
			}
			return true;
		},
	},
	setup(props, { emit }) {
		const type = ref('news');
		const title = ref('');
		const createPost = () => {
			const newPost = {
				title: title.value,
				type: type.value,
			};
			emit('createPost', newPost);

			title.value = '';
			type.value = 'news';
		};

		return { type, title, createPost };
	},
};
</script>
