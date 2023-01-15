import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./router/index";
import { Provider } from "react-redux";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
