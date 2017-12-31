import {shallow} from "enzyme";
import * as React from "react";
import Layout from "../../components/layout";

describe("Layout component", () => {
    it("should render correctly", () => {
        const wrapper = shallow(<Layout title={""} description={""}/>);

        expect(wrapper.html()).toMatchSnapshot();
    });
});
