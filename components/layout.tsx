import * as React from "react";
import Head from "./head";
import Nav from "./nav";

interface ILayoutProps {
    title: string;
    description: string;
    children?: any;
}

export default ({title, description, children}: ILayoutProps) => (
    <>
        <Head title={title} description={description}/>
        <Nav/>
        <h1>{title}</h1>
        {children}
    </>
);
