import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "../component/Head";
import Foot from "../component/Foot";
import Sidebar from "../component/Side";
import Createpost from "../component/Createpost";
import Postlist from "../component/Postlist";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import PostListProvider from "../store/posts-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div className="content">
            <Head />

            <Outlet />
            <Foot />
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
