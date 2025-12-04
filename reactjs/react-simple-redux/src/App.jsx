import { Provider } from "react-redux"; 
import appStore from "./utils/appStore";
// here we import Provider from react-redux to use redux store in our react app, so this Provider is a bridge between react and redux
// Here we use provider as a wrapper for our whole app. This Provider component takes a prop called store which holds the redux store we created in appStore.js file
import Cart from "./Cart";
import CartItem from "./CartItem";

function App() {

  return (
    <>
    {/* Note : here store={appStore} is a prop passed to Provider */}
    <Provider store={appStore}>
      <div>
        <Cart /> {/* This one */}
        <hr/>
        <CartItem item={"Momo"} />
        <CartItem item={"Pizza"} />
        <CartItem item={"Burger"} />
      </div>
    </Provider>
    </>
  )
}

export default App
