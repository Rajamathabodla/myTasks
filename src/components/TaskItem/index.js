import './index.css'

const TaskItem = props => {
  const {details} = props
  const {userTask, selectOption} = details
  return (
    <li className="taskBox">
      <p className="userTaskText">{userTask}</p>
      <button type="button" className="tagsbtn">
        {selectOption}
      </button>
    </li>
  )
}
export default TaskItem
