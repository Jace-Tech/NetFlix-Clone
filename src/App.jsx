import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"

import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home"
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Error404 from "./pages/Error404";
import ScrollTop from "./components/ScrollTop";



const App = () => {
    const routes = [
        { path: '/', component: <Home /> },
        { path: '/login', component: <Login /> },
        { path: '/registration', component: <Registration /> },
        { path: '/*', component: <Error404 /> },
    ]

    useEffect(() => {
        AOS.init({ duration: 1500 })
        AOS.refresh()
    }, [])

    return (
        <HelmetProvider>
            <BrowserRouter basename={"/"}>
                <ScrollTop>
                    <Routes>
                        {routes.map(({ path, component }, index) => <Route path={path} key={`${path}-${index}`} element={component} />)}
                    </Routes>
                </ScrollTop>
            </BrowserRouter>
        </HelmetProvider>
    )
}

export default App