import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;

    //! for production only
    outline: 1px dashed salmon;
  }

  body {
    margin: 0;
    /* padding: 10%; */
    font-family: system-ui;
  }

  ul {
    padding: 0;
  }

  li {
    list-style: none;
  }

  img {
    object-fit: cover;
    // outline-image: linear-gradient(brown, white);
    // outline-width: 20px;
    // outline-style: solid;
    border: 20px solid brown;
  }

  a {
    text-decoration: none;
    color: unset
  }
`;
