import { Provider } from 'react-redux';
import initializeStore from './src/store/index';
import Navigation from './src/screens/index';

const store = initializeStore()

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>

  );
}

