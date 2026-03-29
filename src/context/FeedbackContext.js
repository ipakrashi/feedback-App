import { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    let [feedback, setFeedback] = useState([])

    const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false })

    useEffect(() => {
        fetchFeedback()
    }, [])

    // Fetch Feedback
    const fetchFeedback = async () => {
        const response = await fetch(`http://localhost:5000/feedback`)
        const data = await response.json()
        setFeedback(data)
    }

    //  To update the Edited Entry
    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map((item) =>
                item.id === id ? { ...item, ...updItem } : item,
            ),
        )
    }

    // To edit a Feedback Entry (sets the edit flag to edit and copies the items object)
    const editFeedback = (item) => {
        setFeedbackEdit({ item, edit: true })
    }

    // To delete a Feedback Entry
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete this ?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // To save a Feedback Entry (new & updated)
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback]) //Adding new record to the existing records and making a new array
    }

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                feedbackEdit,
                deleteFeedback,
                addFeedback,
                editFeedback,
                updateFeedback,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext
