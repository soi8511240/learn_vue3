<template>
	<main>
		<div class="container py-4">
			<PostCreate @create-post="createPost" />
			<hr class="my-4" />
			<div class="row g-3">
				<div
					class="col col-4"
					v-for="(post, index) in posts"
					:key="index"
				>
					<PostItem
						:title="post.title"
						:content="post.content"
						:type="post.type"
						:is-like="post.isLike"
						@toggle-like="post.isLike = !post.isLike"
					/>
				</div>
			</div>

			<hr class="my-4" />

			<LabelInput
				v-model="username"
				label="이름"
				class="parent-class"
				style="color: red"
				id="parent"
			></LabelInput>
		</div>
	</main>
</template>

<script>
import { reactive, ref } from 'vue';
import PostItem from '@/components/PostItem.vue';
import PostCreate from '@/components/PostCreate.vue';
import LabelInput from '@/components/LabelInput.vue';

export default {
	components: {
		PostItem,
		PostCreate,
		LabelInput,
	},
	setup() {
		const createPost = newPost => {
			const post = { ...newPost };
			posts.push(post);
		};
		const posts = reactive([
			{ title: '제목1', content: '내용1', type: 'news', isLike: true },
			{ title: '제목2', content: '내용2', type: 'news', isLike: false },
			{ title: '제목3', content: '내용3', type: 'notice', isLike: true },
			{ title: '제목4', content: '내용4', type: 'notice', isLike: false },
			{ title: '제목5', content: '내용5', type: 'news', isLike: false },
		]);

		const username = ref('');

		return { posts, createPost, username };
	},
};
</script>

<style lang="scss" scoped></style>
