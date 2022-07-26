import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Home from "../pages/Home";
import Chat from "../components/Chat.js/Chat";

export const DashboardRoutes = () => {
  return (
    <>
          <BrowserRouter>
              <Header />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/chat" element={<Chat />} />
              </Routes>
          </BrowserRouter>
    </>
  )
}
