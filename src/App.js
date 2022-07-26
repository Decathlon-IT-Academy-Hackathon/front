import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Chat from "./components/Chat/Chat";
import './components/Chat/chat.css'

function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
