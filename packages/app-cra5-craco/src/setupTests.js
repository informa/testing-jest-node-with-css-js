import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@vanilla-extract/css/disableRuntimeStyles';

configure({ adapter: new Adapter() });
