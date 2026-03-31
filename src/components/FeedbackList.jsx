import { AnimatePresence, motion } from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext.js'
import Spinner from './shared/Spinner.jsx'

function FeedbackList() {
    let { feedback, isLoading } = useContext(FeedbackContext)

    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No Feedback Data Received Yet</p>
    }

    return isLoading ? (
        <Spinner />
    ) : (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedback.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem key={item.id} item={item} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}

export default FeedbackList
