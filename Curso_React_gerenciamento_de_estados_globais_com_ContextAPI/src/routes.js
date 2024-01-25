import Login from "pages/Login";
import { BrowserRouter, Route, Switch } from "/react-router-dom";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};
export default Router;
