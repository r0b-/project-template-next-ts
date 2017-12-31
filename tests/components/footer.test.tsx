import {shallow} from "enzyme";
import * as React from "react";
import Footer from "../../components/footer";

describe("Footer component", () => {
    it("should include a copyright notice", () => {
        const wrapper = shallow(<Footer/>);

        expect(wrapper.text()).toMatch(/Copyright \d{4}/);
    });
});
