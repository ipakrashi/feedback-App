import { createContext, useState, useEffect } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    let [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false })
    let [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchFeedback()
    }, [])

    // Fetch Feedback
    const fetchFeedback = async () => {
        const response = await fetch(`/feedback`)
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

    //  To update the Edited Entry
    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updItem),
        })

        const data = await response.json()

        setFeedback(
            feedback.map((item) =>
                item.id === id ? { ...item, ...data } : item,
            ),
        )
    }

    // To edit a Feedback Entry (sets the edit flag to edit and copies the items object)
    const editFeedback = (item) => {
        setFeedbackEdit({ item, edit: true })
    }

    // To delete a Feedback Entry
    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure you want to delete this ?')) {
            await fetch(`/feedback/${id}`, { method: 'DELETE' })
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // To save a Feedback Entry (new & updated)
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFeedback),
        })

        const data = await response.json()
        console.log(data)

        setFeedback([data, ...feedback]) //Adding new record to the existing records and making a new array
    }

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                feedbackEdit,
                isLoading,
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
