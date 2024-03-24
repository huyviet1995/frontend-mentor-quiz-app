<template>
    <div class="container flex flex-row justify-between max-w-5xl mx-auto">
        <div class="">
            <h1 class="mb-5">Frontend Quiz!</h1>
            <p>Pick a subject to get started</p>
        </div>
        <div class="">
            <ul class="subject-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Accessibility</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomePage",
};
</script>

<style scoped>
h1 {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    line-height: 100%;
    color: #626c7f;
    flex: none;
    order: 1;
    flex-grow: 0;
}

p {
    /* Pick a subject to get started. */
    font-family: "Rubik";
    font-style: italic;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    /* identical to box height, or 30px */
    color: #626c7f;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
}
</style>
