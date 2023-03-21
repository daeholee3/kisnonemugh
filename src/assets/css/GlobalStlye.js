import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --clr-grey-1: #102a42;
    --clr-grey-5: #617d98;
    --clr-grey-10: #f1f5f8;
    --clr-white: #fff;
    --clr-black: #000000;
    --spacing: 0.25rem;
    /* --transition: all 0.3s linear; */
    --transition: 0.3s ease-in-out all;

}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.5;
    font-size: 0.875rem;
    color: var(--clr-black);
}

a {
    text-decoration: none;
    color: var(--clr-black);
}

img {
    width: 100%;
    display: block;
}

h1,
h2,
h3,
h4 {
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
}

h1 {
    font-size: 3rem;
}

h2 {
    font-size: 2rem;
}

h3 {
    font-size: 1.5rem;
}

h4 {
    font-size: 0.875rem;
}

p {
    margin-bottom: 1.25rem;
}

@media screen and (min-width: 800px) {
    h1 {
        font-size: 4rem;
    }

    h2 {
        font-size: 2.5rem;
    }

    h3 {
        font-size: 2rem;
    }

    h4 {
        font-size: 1rem;
    }

    body {
        font-size: 1rem;
    }

    h1,
    h2,
    h3,
    h4 {
        line-height: 1;
    }
}


`;

export default GlobalStyle;