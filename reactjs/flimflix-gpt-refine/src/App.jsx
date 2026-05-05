import { Provider } from 'react-redux';
import AppRoutes from './routes';
import appStore from './app/store';

function App() {
  return (
    <>
    <Provider store={appStore}>
      <AppRoutes/>
    </Provider>
    </>
  );
}

export default App;

