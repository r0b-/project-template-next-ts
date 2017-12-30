import NextHead from "next/head";
import * as React from "react";

export interface IHeadProps {
    title: string;
    description: string;
    children?: any;
}

export default ({title, description, children}: IHeadProps) => (
    <NextHead>
        <meta charSet="UTF-8"/>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/static/favicon.ico"/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description}/>
        {children}
    </NextHead>
);
