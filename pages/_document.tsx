import NextDocument, {Head as NextHead, Main as NextMain, NextScript} from "next/document";
import * as React from "react";
import {ServerStyleSheet} from "styled-components";

export default class AppDocument extends NextDocument {
    public static async getInitialProps(context: any) {
        const sheet = new ServerStyleSheet();
        const page = context.renderPage(
            (App: typeof React.Component) => (props: any) => sheet.collectStyles(<App {...props} />));
        return {...page, styleTags: sheet.getStyleElement()};
    }

    public render() {
        return (
            <html>
            <NextHead>
                {this.props.styleTags}
            </NextHead>
            <body>
            <NextMain/>
            <NextScript/>
            </body>
            </html>
        );
    }
}
