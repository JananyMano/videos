import React from "react";
import { act as domAct } from "react-dom/test-utils";
import { act as testAct, create } from "react-test-renderer";
import ReactDOM from "react-dom";

import App from "../components/App";

let root;
let app;
/*const originalRender = ReactDOM.render;
function renderToDOM() {
  if (root !== null) {
      ReactDOM.render(<App />, root)
  }
}*/

test("Root component", () => {
  domAct(() => {
    testAct(() => {
      root = document.querySelector("#root");
    });
  });
  expect(root).toMatchSnapshot();

  domAct(() => {
    testAct(() => {
      app = create(<App />);
    });
  });
  expect(app).toMatchSnapshot();
});

/*beforeEach(() => {
  global.document.getElementById = () => true;
  ReactDOM.render = jest.fn();
});
afterAll(() => {
  ReactDOM.render = originalRender;
});
test("should call ReactDOM.render", () => {
  renderToDOM();
  expect(ReactDOM.render).toHaveBeenCalled();
});*/
