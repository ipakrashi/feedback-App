import FeedbackList from './components/FeedbackList.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Header from './components/Header'
import FeedbackStats from './components/FeedbackStats.jsx'
import FeedbackForm from './components/FeedbackForm.jsx'
import AboutPage from './AboutPage.jsx'
import AboutIconLink from './components/AboutIconLink.jsx'
import { FeedbackProvider } from './context/FeedbackContext.js'

function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <>
                                <Header text={'Feedback UI'} />
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        }
                    >
                        This is the Home Route
                    </Route>
                </Routes>

                <Routes>
                    <Route path='/about' element={<AboutPage />}></Route>
                </Routes>
                <AboutIconLink />
            </Router>
        </FeedbackProvider>
    )
}

export default App
