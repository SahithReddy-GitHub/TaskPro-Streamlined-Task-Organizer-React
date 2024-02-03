import './index.css'

const TaskItem = props => {
  const {activeTag, data, tagsList} = props
  const {inputTask, inputTag} = data

  const displayTagObj = tagsList.find(tag => tag.optionId === inputTag)
  const displayTag = displayTagObj ? displayTagObj.displayText : ''

  if (activeTag !== inputTag && activeTag !== '') {
    return null
  }

  return (
    <li className="taskItemList">
      <p className="para">{inputTask}</p>
      <p className="customPara">{displayTag}</p>
    </li>
  )
}

export default TaskItem
