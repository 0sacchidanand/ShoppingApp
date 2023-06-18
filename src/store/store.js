import {createStore} from 'redux';
import reducer from './reducer';

const ConfigureStore = createStore(reducer);


export default ConfigureStore;
