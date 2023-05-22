import {test, beforeAll, afterAll, expect} from 'vitest';
const Component = require('../src/Component');
test('extend class', () => {
    class CustomComponent extends Component {
    }

    const customComponentInstance = new CustomComponent('.selector');
    expect(customComponentInstance.selector).toEqual('.selector');
});
