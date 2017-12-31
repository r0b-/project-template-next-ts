import {shallow} from "enzyme";
import * as React from "react";
import AboutPage from "../../pages/about";

describe("'About page", () => {
    it("should render correctly", () => {
        const wrapper = shallow(<AboutPage/>);

        expect(wrapper.html()).toMatchSnapshot();
    });
});
