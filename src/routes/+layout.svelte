<nav>
    <div class="nav-container-80">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <a href="/">
            <img src="/real-home-logo.png" alt="site logo image" width="100">
        </a>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/shop" data-sveltekit-preload-data>Shop</a></li>
            <li><a href="/settings">Settings</a></li> 
            <li><a href="/contact">Contact</a></li> 
        </ul>
    </div>
</nav>

<div class="body-container-80">
    <slot></slot>
</div>

<footer>
    <div class="footer-container-80">
        <p>Copyright @2022</p>
    </div>
</footer>

<!-- Layout styles -->
<style>
    :global(body) {
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    nav {
        background-color: #f1f1f1;
        padding: 1rem 0;
    }

    .nav-container-80 {
        max-width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }

    .body-container-80 {
        max-width: 80%;
        min-height: 100vh;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

    .footer-container-80 {
        max-width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

    ul {
        display: flex;
        list-style: none;
    }

    li {
        margin-left: 1rem;
    }

    a {
        text-decoration: none;
        color: #000;
        font-size: 1.2rem;
    }

    a:hover {
        color: rgb(10, 142, 213);
    }

    a:active {
        color: #000;
    }

    footer {
        background-color: #f1f1f1;
        padding: 1rem 0;
    }
</style>