import "./App.css";
import UseStateComponent from "./useStateComponent";
import UseEffectComponent from "./useEffectComponent";
import UseContextComponent from "./useContextComponent";
import UseReducerComponent from "./UseReducerComponent";
import UseRefComponent from "./useRefComponent";
import CustomHookComponent from "./customHookComponent";
import EvenMoreReactComponent from "./EvenMoreReactComponent";

function App() {
  return (
    <div>
      <h1>Even more React component TS stuff</h1>
      <EvenMoreReactComponent />
      <hr />
      <h1>Custom Hook Component</h1>
      <CustomHookComponent />
      <hr />
      <h1>useRef</h1>
      <UseRefComponent />
      <hr />
      <h1>useReducer</h1>
      <UseReducerComponent />
      <hr />
      <h1>useContext</h1>
      <UseContextComponent />
      <hr />
      <h1>useEffect</h1>
      <UseEffectComponent />
      <hr />
      <h1>useState</h1>
      <UseStateComponent />
      <hr />
    </div>
  );
}

export default App;
