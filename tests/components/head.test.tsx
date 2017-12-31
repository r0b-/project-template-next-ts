import {shallow} from "enzyme";
import * as React from "react";
import Head from "../../components/head";

describe("Head component", () => {
    it("should include correct meta tags", () => {
        const wrapper = shallow(<Head title={"test"} description={"TEST"}/>);

        expect(wrapper.find("title").text()).toBe("test");
        expect(wrapper.find("meta[name='description']").prop("content")).toBe("TEST");
    });
});
