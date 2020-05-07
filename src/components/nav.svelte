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
    color: var(--green);
    font-weight: 500;
    font-size: 22px;
  }

  @media (min-width: 601px) {
    .logo a {
      font-size: 21px;
    }
  }

  ul {
    display: flex;
    justify-content: space-evenly;
    justify-self: end;
    margin: 0;
    padding: 0;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background-color: rgb(61, 207, 61);
    display: block;
    bottom: -1px;
  }

  li a {
    text-decoration: none;
    display: block;
    font-size: 16px;
    font-weight: normal;
    color: var(--brown);
  }

  @media (min-width: 601px) {
    li a {
      padding: 1.5em 0.5em;
    }
    [aria-current]::after {
      width: calc(100% - 1em);
    }
  }

  @media (max-width: 600px) {
    nav {
      flex-direction: column;
    }

    .logo {
      margin-top: 20px;
    }

    ul {
      width: 100%;
      margin: 0 -0.7em;
      align-self: center;
    }

    li a {
      font-size: 15px;
      padding: 1em 0;
    }
  }

  @media (max-width: 360px) {
    li a {
      font-size: 14px;
    }
  }

  @media (max-width: 300px) {
    ul {
      flex-direction: column;
    }

    li a {
      padding: 0.3em 0;
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
