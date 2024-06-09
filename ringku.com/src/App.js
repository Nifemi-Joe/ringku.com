import './assets/css/index.css'
import {BrowserRouter} from "react-router-dom";
import store from "./store";
import {Provider} from "react-redux";
import {Router} from "./router/router.jsx";
import {NotificationProvider} from "./util/provider/NotificationProvider.tsx";

function App() {
  return (
      <Provider store={store}>
        <NotificationProvider/>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
