
const Password = (props) => {
  return (
    <div>
          <input type="password" id="user_pwd" name="user_pwd" required placeholder={props.place} minLength="6" maxLength="15" />
    </div>
  )
}

export default Password
