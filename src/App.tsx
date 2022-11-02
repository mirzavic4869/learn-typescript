import UseStateComponent from "./UseState";
import UseEffectComponent from "./useEffect";

import "./App.css";

function App() {
	return (
		<div>
			<div>
				<h1>Use State Component</h1>
				<UseStateComponent />
				<h1>Use Effect Component</h1>
				<UseEffectComponent />
			</div>
		</div>
	);
}

export default App;
