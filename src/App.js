import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import myStore from "./redux/store";
import Main from "./components/Main";

function App() {
    return (
        <div>
            <Provider store={myStore}>
                <BrowserRouter>
                    <Main />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;

