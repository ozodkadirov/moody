import {Fragment} from "react";
import "./input.scss"
const Input = ({className, type, placeholder, ...props}) => {
    className = `Input ${className}`;
  return(
      <Fragment>
          <input type={type} className={className} placeholder={placeholder} {...props}/>
      </Fragment>
  )
}

export default Input;