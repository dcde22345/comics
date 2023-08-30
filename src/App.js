import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Start from './pages/Start'
import Game1 from "./pages/Game1";
import Game2 from "./pages/Game2";
import Game3 from "./pages/Game3";
import Game4 from "./pages/Game4";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/comics/" element={<Start />}></Route>
                <Route path="comics/Game1" element={<Game1 />}></Route>
                <Route path="/comics/Game2" element={<Game2 />}></Route>
                <Route path="/comics/Game3" element={<Game3 />}></Route>
                <Route path="/comics/Game4" element={<Game4 />}></Route>

            </Routes>
        </BrowserRouter>
    )
}

export default App;