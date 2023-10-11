import './index.css'

const TagsItem = props => {
  const {tagsDetails, onfilterItems} = props
  const fliterButton = () => {
    onfilterItems(tagsDetails.optionId)
  }

  return (
    <li>
      <button type="button" className="buttonisSelected" onClick={fliterButton}>
        {tagsDetails.displayText}
      </button>
    </li>
  )
}
export default TagsItem
