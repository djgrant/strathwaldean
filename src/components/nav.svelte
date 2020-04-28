<script>
  export let segment;
</script>

<style>
  header {
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(53, 155, 53, 0.1);
    background: white;
  }

  nav {
    display: flex;
    justify-content: space-between;
    font-weight: 300;
  }

  .logo {
    align-self: center;
  }

  .logo a {
    text-decoration: none;
    color: rgb(53, 155, 53);
    font-weight: 500;
    font-size: 22px;
  }

  @media (min-width: 601px) {
    .logo a {
      font-size: 21px;
    }
  }

  ul {
    justify-self: end;
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(61, 207, 61);
    display: block;
    bottom: -1px;
  }

  li a {
    text-decoration: none;
    padding: 1.5em 0.5em;
    display: block;
    font-size: 16px;
    font-weight: normal;
    color: var(--brown);
  }

  @media (max-width: 600px) {
    nav {
      flex-direction: column;
    }

    .logo {
      margin-top: 20px;
    }

    ul {
      margin: 0 -0.7em;
      align-self: center;
    }

    li a {
      font-size: 15px;
      padding: 1em 0.3em;
    }
  }

  @media (max-width: 360px) {
    li a {
      font-size: 14px;
    }
  }
</style>

<header>
  <div class="container">
    <nav>
      <div class="logo">
        <a href="/">Strathwaldean Quad</a>
      </div>
      <ul>
        <li>
          <a
            aria-current={segment === undefined ? 'page' : undefined}
            rel="prefetch"
            href=".">
            Latest
          </a>
        </li>
        <li>
          <a
            aria-current={segment === 'contribute' ? 'page' : undefined}
            rel="prefetch"
            href="contribute">
            Contribute
          </a>
        </li>
        <li>
          <a
            aria-current={segment === 'get-involved' ? 'page' : undefined}
            rel="prefetch"
            href="get-involved">
            Get involved
          </a>
        </li>
        <li>
          <a
            aria-current={segment === 'about' ? 'page' : undefined}
            rel="prefetch"
            href="about">
            About
          </a>
        </li>

      </ul>
    </nav>
  </div>
</header>
