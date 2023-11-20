// import { Route, Router, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Body from "./component/Body";
import Header from "./component/Header";
import PostContainer from "./component/PostContainer";
import AddPost from "./component/AddPost";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Auth0Provider
            domain="dev-881prjcanu2bjwob.us.auth0.com"
            clientId="lPdkN2I6qg3vEZ8nqV7tU4NR2LOoXuvn"
            authorizationParams={{
              redirect_uri: window.location.origin,
            }}
          >
            <Header />
            <Routes>
              <Route path="/" element={<Body />}>
                <Route index element={<PostContainer />} />
                <Route path="add" element={<AddPost />} />
              </Route>
              {/* <Route path='/shimmer' element={<Shimmer />} /> */}
            </Routes>
          </Auth0Provider>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
