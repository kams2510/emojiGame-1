// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, isClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const onClickEmoji = () => {
    isClickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button onClick={onClickEmoji} className="emoji-btn">
        <img src={emojiUrl} className="emoji-icon" alt={emojiName} />
        <p>{id}</p>
      </button>
    </li>
  )
}

export default EmojiCard
