import './index.css'

const TagItem = props => {
  const {data, activeTag, onClickTag} = props
  const {optionId, displayText} = data

  const customBtn = activeTag === optionId ? 'customBtn' : ''

  const onTagItem = () => {
    onClickTag(optionId)
  }

  return (
    <li>
      <button
        type="button"
        className={`liBtn ${customBtn}`}
        onClick={onTagItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TagItem
