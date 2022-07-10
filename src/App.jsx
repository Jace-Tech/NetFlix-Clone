import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home"
import Login from "./pages/Login";



const App = () => {
    const routes = [
        { path: '/', component: <Home /> },
        { path: '/login', component: <Login /> },
    ]

    useEffect(() => {
        AOS.init({ duration: 1500 })
        AOS.refresh()
    }, [])

    return (
        <HelmetProvider>
            <BrowserRouter>
                <Routes>
                    {routes.map(({ path, component }, index) => <Route path={path} key={`${path}-${index}`} element={component} />)}
                </Routes>
            </BrowserRouter>
        </HelmetProvider>
    )
}

export default App