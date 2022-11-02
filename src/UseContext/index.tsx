import UserContext, { UserState } from "./store";
import { useState, useContext } from "react";

function ConsumerComponent() {
	const user = useContext<UserState>(UserContext);
	return (
		<div>
			<div>First : {user.first}</div>
			<div>Last : {user.last}</div>
		</div>
	);
}

function UseContextComponent() {
	const [user, userSet] = useState<UserState>({ first: "Johny ", last: "Baukering" });

	return (
		<UserContext.Provider value={user}>
			<ConsumerComponent />
			<button onClick={() => userSet({ first: "Jim ", last: "Clark" })}>Change Context</button>
		</UserContext.Provider>
	);
}

export default UseContextComponent;
