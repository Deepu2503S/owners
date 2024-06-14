import { FaFacebook } from 'react-icons/fa';

const Facebook = (props) => {
  return (
    <div>
        <a href="#" className="facebook">
          <FaFacebook />
          <span className="heya">{props.text}</span>
        </a>
    </div>
  )
}

export default Facebook