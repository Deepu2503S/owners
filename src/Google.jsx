import { FaGoogle } from 'react-icons/fa';

const Google = (props) => {
  return (
    <div>
        <a href="#" className="Google">
          <FaGoogle />
          <span className="he">{props.text}</span>
        </a>
    </div>
  )
}

export default Google