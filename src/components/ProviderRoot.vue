<template>
	<main>
		<ProvideInject></ProvideInject>
		{{ appMessage }}
	</main>
</template>

<script>
import ProvideInject from './ProvideInject.vue';
import { inject } from 'vue';

export default {
	components: { ProvideInject },
	setup() {
		const appMessage = inject('app-message');
		return { appMessage };
	},
};
</script>
