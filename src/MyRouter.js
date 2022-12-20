import React from "react";
import { Route, Routes } from "react-router-dom";
import Corestone from "./Corestone";
import Introduce from "./Introduce";
import WebIdCreate from "./pages/webids/WebIdCreate";
import WebIds from "./pages/webids/WebIds";
import WebApp from "./pages/WebApp";
import WebIdEdit from "./pages/webids/WebIdEdit";

const MyRouter = () => (

    <Corestone>
      <Routes>
      <Route path="/" element={<Introduce/> } />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/corestone/webapp" element={<WebApp />} />
        <Route path="/corestone/webids" element={<WebIds />} />
        <Route path="/corestone/webids/create" element={<WebIdCreate />} />
        <Route path="/corestone/webids/edit/:webId" element={<WebIdEdit />} />

      </Routes>
    </Corestone>

);

export default MyRouter;
