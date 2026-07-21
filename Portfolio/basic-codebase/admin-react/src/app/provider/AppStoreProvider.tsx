import { Provider } from 'react-redux';
import AppStore from '../store/AppStore';

const AppStoreProvider = ({children}: {children?: React.ReactNode}) => {
  return (
    <Provider store={AppStore}>
      {children}
    </Provider>
  )
}

export default AppStoreProvider
