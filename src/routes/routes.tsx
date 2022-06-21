import MainPage from "../view/MainPage/MainPage";

type Route = {
    path: string;
    component: JSX.Element;
}

const routes: Route[] = [
    {
        // Main page is present in all routes
        path: '*',
        component: <MainPage/>,
    },
];
export default routes;