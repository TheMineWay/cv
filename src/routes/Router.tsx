import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../view/layout/Layout";
import routes from "./routes";

export default function Router() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    {
                        routes.map((route) => (
                            <Route
                                path={route.path}
                                element={route.component}
                            />
                        ))
                    }
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}