import Link from "next/link";
import * as React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
`;

export default () => (
    <Nav>
        <Link prefetch href="/">
            <a>Home</a>
        </Link>
        <Link prefetch href="/about">
            <a>About</a>
        </Link>
    </Nav>
);
