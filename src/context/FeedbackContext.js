import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    let [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is Feedback Item 1',
            rating: 10,
        },
        {
            id: 2,
            text: 'This is Feedback Item 2',
            rating: 9,
        },
        {
            id: 3,
            text: 'This is Feedback Item 3',
            rating: 8,
        },
        {
            id: 4,
            text: 'This is Feedback Item 4',
            rating: 7,
        },
        {
            id: 5,
            text: 'This is Feedback Item 5',
            rating: 6,
        },
    ])

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete this ?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback]) //Adding new record to the existing records and making a new array
    }
    return (
        <FeedbackContext.Provider
            value={{ feedback, deleteFeedback, addFeedback }}
        >
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext
