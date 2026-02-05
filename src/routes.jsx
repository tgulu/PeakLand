import Root from "./components/Root/Root";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: (
      <div style={{ padding: 16 }}>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "*",
        element: (
          <div style={{ padding: 16 }}>
            <h1>Page not found</h1>
            <p>The page you are looking for does not exist.</p>
          </div>
        ),
      },
    ],
  },
];

export default routes;
