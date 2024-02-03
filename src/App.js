import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './App.css'
import TagItem from './components/TagItem'
import TaskItem from './components/TaskItem'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class App extends Component {
  state = {
    tasksList: [],
    activeTag: '',
    inputTask: '',
    inputTag: tagsList[0].optionId,
  }

  onFormSubmit = event => {
    event.preventDefault()

    const {inputTask, inputTag} = this.state
    const taskDetails = {inputTask, inputTag}
    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, taskDetails],
      inputTask: '',
      inputTag: tagsList[0].optionId,
    }))
  }

  onChangeTask = event => {
    this.setState({inputTask: event.target.value})
  }

  onChangeTag = event => {
    this.setState({inputTag: event.target.value})
  }

  onClickTag = id => {
    const {activeTag} = this.state

    if (activeTag === id) {
      this.setState({activeTag: ''})
    } else {
      this.setState({activeTag: id})
    }
  }

  render() {
    const {activeTag, inputTask, inputTag, tasksList} = this.state

    return (
      <div className="bg-con">
        <div className="bg-card">
          <form className="formCon" onSubmit={this.onFormSubmit}>
            <h1 className="formHead">Create a task!</h1>
            <div className="formItem">
              <label htmlFor="task">Task</label>
              <input
                id="task"
                name="task"
                type="text"
                placeholder="Enter the task here"
                value={inputTask}
                onChange={this.onChangeTask}
              />
            </div>
            <div className="formItem">
              <label htmlFor="tag">Tags</label>
              <select id="tag" value={inputTag} onChange={this.onChangeTag}>
                {tagsList.map(eachTag => (
                  <option key={uuidv4()} value={eachTag.optionId}>
                    {eachTag.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn">
              Add Task
            </button>
          </form>
          <div className="taskCon">
            <h1 className="taskHead">Tags</h1>
            <ul className="tagsListCon">
              {tagsList.map(eachTagItem => (
                <TagItem
                  key={uuidv4()}
                  activeTag={activeTag}
                  data={eachTagItem}
                  onClickTag={this.onClickTag}
                />
              ))}
            </ul>
            <h1 className="taskHead">Tasks</h1>
            <ul className="tasksListCon">
              {tasksList.length === 0 ? (
                <div className="emptyCon">
                  <p className="taskHead">No Tasks Added Yet</p>
                </div>
              ) : (
                tasksList.map(eachTask => (
                  <TaskItem
                    key={uuidv4()}
                    activeTag={activeTag}
                    data={eachTask}
                    tagsList={tagsList}
                  />
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App
