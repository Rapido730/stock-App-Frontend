import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import { Auth } from "./routes/authentication/authentication.component";
import { Home } from "./routes/home/home.component";


const App = () => {

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="signin" element={<Auth />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
