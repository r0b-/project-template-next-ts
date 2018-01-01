import {shallow} from "enzyme";
import * as React from "react";
import Footer from "../../components/footer";
import Head from "../../components/head";
import Layout from "../../components/layout";
import Nav from "../../components/nav";

describe("Layout component", () => {
    it("should render correctly", () => {
        const wrapper = shallow(<Layout title={""} description={""}/>);

        expect(wrapper.find(Head).exists()).toBeTruthy();
        expect(wrapper.find(Nav).exists()).toBeTruthy();
        expect(wrapper.childAt(2).type()).toBe("main");
        expect(wrapper.find(Footer).exists()).toBeTruthy();
    });
});
