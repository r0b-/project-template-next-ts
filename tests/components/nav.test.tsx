import {shallow} from "enzyme";
import * as React from "react";
import Nav from "../../components/nav";

describe("Navigation component", () => {
    it("should include two links", () => {
        const wrapper = shallow(<Nav/>);

        expect(wrapper.find("a")).toHaveLength(2);
    });
});
