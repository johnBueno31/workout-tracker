import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import Exercises from "./pages/Exercises";
import History from "./pages/History";
import "/src/styles/global.css";

function App() {
	return (
		<div className="app-shell">
			<aside className="sidebar">
				<h1>Workout Tracker</h1>
				<nav>
					<NavLink to="/">Dashboard</NavLink>
					<NavLink to="/workouts">Workouts</NavLink>
					<NavLink to="/exercises">Exercises</NavLink>
					<NavLink to="/history">History</NavLink>
				</nav>
			</aside>

			<main className="main-content">
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/workouts" element={<Workouts />} />
					<Route path="/exercises" element={<Exercises />} />
					<Route path="/history" element={<History />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
