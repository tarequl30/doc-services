import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css"
import Home from "./components/Home/Home"
import Login from "./components/Home/Login/Login"
import AuthProvider from "./Context/AuthContext"

function App() {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/login" children={<Login />} />
                </Switch>
            </Router>
        </AuthProvider>
    )
}

export default App
