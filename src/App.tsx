import UseStateComponent from "./UseState";
import UseEffectComponent from "./UseEffect";
import UseContextComponent from "./UseContext";

import "./App.css";

function App() {
	return (
		<div>
			<div>
				<h1>Use State Component</h1>
				<UseStateComponent />
				<h1>Use Effect Component</h1>
				<UseEffectComponent />
				<h1>Use Context Component</h1>
				<UseContextComponent />
			</div>
		</div>
	);
}

export default App;
