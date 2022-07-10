import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import AOS from "aos";
import "aos/dist/aos.css";



import Home from "./pages/Home"



const App = () => {
    const routes = [
        { path: '/', component: <Home />}
    ]

    useEffect(() => {
        AOS.init({ duration: 2000})
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
