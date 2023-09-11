<script setup>
import { computed } from "vue";

const props = defineProps(["courses"]);
const courseDone = computed(() => {
	return props.courses.filter((course) => course.done).length;
});
</script>
<template>
	<div>
		{{ ` ${courseDone} cursos completos de um total de ${courses.length}` }}
	</div>
</template>

<style lang="scss" scoped></style>
