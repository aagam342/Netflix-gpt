import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import Header from "./components/Header";
import Login from "./components/Login";
import Browse from "./components/Browse";
import MovieDescriptionPage from "./components/MovieDescriptionPage";
import GptSearch from "./components/GptSearch";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "browse",
          element: <Browse />,
        },
        {
          path: "/movie/:movieId",
          element: <MovieDescriptionPage />,
        },
        {
          path: "gptSearch",
          element: <GptSearch />,
        },
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
