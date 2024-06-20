<template>
	<main>
		<div class="container py-4">
			<Mybutton @click="sayHello"></Mybutton>
			<LabelInput></LabelInput>
			<hr />

			<FancyButton>
				Click?! <span style="color: #f40">@@</span>
			</FancyButton>
			<FancyButton v-slot="{ fancyMessage }">
				{{ fancyMessage }}
			</FancyButton>
			<FancyButton>
				<template v-slot="{ fancyMessage }">
					{{ fancyMessage }}</template
				>
			</FancyButton>
			<FancyButton>
				<template #="{ fancyMessage }"> {{ fancyMessage }}</template>
			</FancyButton>

			<hr />
			<AppCard>
				<template #header>상단</template>
				<template #default="{ childMessage, helloMessage }">
					{{ childMessage }}<br />
					{{ helloMessage }}
					<hr />
					중단
				</template>
				<!-- 암시적으로 default슬롯 -->
				<template #footer>하단</template>
			</AppCard>
			<AppCard>
				<template #default>뭥미</template>
			</AppCard>
		</div>
	</main>
</template>

<script>
import Mybutton from './MyButton.vue';
import LabelInput from './LabelInput.vue';

import FancyButton from './FancyButton.vue';
import AppCard from '@/components/Appcard.vue';

export default {
	components: { Mybutton, LabelInput, FancyButton, AppCard },
	setup() {
		const sayHello = () => {
			alert('hi');
		};
		return { sayHello };
	},
};
</script>

<style lang="scss" scoped></style>
