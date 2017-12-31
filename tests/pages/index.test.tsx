import {shallow} from "enzyme";
import * as React from "react";
import IndexPage from "../../pages/index";

describe("Index page", () => {
    it("should render correctly", () => {
        const wrapper = shallow(<IndexPage/>);

        expect(wrapper.html()).toMatchSnapshot();
    });
});
