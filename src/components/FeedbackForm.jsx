import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext.js'

function FeedbackForm() {
    let { addFeedback } = useContext(FeedbackContext)

    const [text, setText] = useState('')
    const [btnDisbaled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage('')
        } else if (text !== '' && text.trim().length < 10) {
            setBtnDisabled(true)
            setMessage('Input must atleast contain 10 characters')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating,
            }
            addFeedback(newFeedback)

            setText('')
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate our services?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className='input-group'>
                    <input
                        type='text'
                        name=''
                        placeholder='Write A Review'
                        value={text}
                        onChange={(e) => handleTextChange(e)}
                    />

                    <Button
                        type='submit'
                        isDisabled={btnDisbaled}
                        version='primary'
                    >
                        Send
                    </Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
