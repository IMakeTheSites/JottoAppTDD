import { shallow } from 'enzyme';
import { findByTestAttr } from "../test/testUtils";
import Input from './Input';

/**

 * @returns {ShallowWrapper}
 * 
 */

const setup = () => {
    return shallow(<Input />);
}

test('Input renders without error', () => {
    const wrapper = setup();
    const inputComponent = findByTestAttr(wrapper, 'component-input');
    expect(inputComponent.length).toBe(1);

})