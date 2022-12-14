<script>
    /** @type {import('./$types').ActionData}*/
    export let form;

</script>

<div>
    <h1>Contact Form</h1>
    <form method="POSt" action="?/submitContact">
        <label for="name">Name</label>
        <input type="text" name="name">

        <label for="email">Email</label>
        <input type="email" name="email">

        <label for="company">Company</label>
        <input type="text" name="company">

        <label for="message">Message</label>
        <textarea name="message"></textarea>

        <input type="submit" value="submit">
    </form>

    {#if form?.success}
        <p>Message has been submitted!</p>
    {/if}

</div>

<style>
    form {
        display: flex;
        flex-direction: column;
        max-width: 300px;
    }
</style>