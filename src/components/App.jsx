import React from "react";
import {
  BrowserRouter,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";

import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

import Header from "./Header";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Header />

        {/* deafault page '/'   */}
        <Route path="/" exact component={StreamList} />
        <Route path="/stream/show" component={StreamShow} />
        <Route path="/stream/edit" component={StreamEdit} />
        <Route path="/stream/delete" component={StreamDelete} />
        <Route path="/stream/create" component={StreamCreate} />
      </BrowserRouter>
    </div>
  );
};
export default App;
