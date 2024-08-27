import React from "react";
import './styles/index.css'
import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Notes from "./components/Notes.jsx";
import '@fontsource-variable/roboto-mono'

export default function App() {
    return (
        <>
            <Sidebar />
            <Dashboard />
        </>
    )
}