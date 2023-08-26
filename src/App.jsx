import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Example from './Example';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Issue from './Create_issue/issue';

function App() {
    /** DaisyUI Theme */
    useEffect(() => {
        document.querySelector('html')?.setAttribute('data-theme', 'business');
    }, []);
    return (
        <>
            <ToastContainer />
            <Routes>
                <Route path="/CreateGame" element={<Issue />} />
                <Route path="/example" element={<Example />} />
            </Routes>
        </>
    );
}

export default App;
