<script>
    let title = "Gaming Information"

    const updateTitle = () => {
        title = "Gaming Information Updated"
    }
</script>

<div>
    <h1>{title}</h1>
    <p>Content</p>
    <input type="text" bind:value={title}>
    <button on:click={updateTitle}>Change Title</button>
</div>

<style>
    h1 {
        color: blue;
    }
</style>