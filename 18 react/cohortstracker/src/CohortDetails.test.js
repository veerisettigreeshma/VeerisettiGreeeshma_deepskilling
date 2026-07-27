import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import CohortDetails from './CohortDetails';
import { CohortData } from './Cohorts';

describe("Cohort Details Component", () => {

    test("should create the component", () => {

        const wrapper = shallow(<CohortDetails />);

        expect(wrapper.exists()).toBe(true);

    });

    test("should initialize the props", () => {

        const wrapper = mount(
            <CohortDetails cohort={CohortData[0]} />
        );

        expect(wrapper.props().cohort).toEqual(CohortData[0]);

    });

    test("should display cohort code in h3", () => {

        const wrapper = mount(
            <CohortDetails cohort={CohortData[0]} />
        );

        expect(wrapper.find("h3").text()).toContain(
            CohortData[0].code
        );

    });

    test("should always render same html", () => {

        const tree = renderer
            .create(<CohortDetails cohort={CohortData[0]} />)
            .toJSON();

        expect(tree).toMatchSnapshot();

    });

});