
const Submit = (props) => {
  return (
    <div >
          <button type="submit" onClick={props.click} className="button">{props.text}</button>
    </div>
  )
}

export default Submit