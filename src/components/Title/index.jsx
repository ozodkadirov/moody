import {Fragment} from "react";
import "./title.scss"
const Title = ({className, children, level, key, bodyText, ...props}) => {
    className = `Typography Typography__${level || bodyText} ${className}`;
    const Text = level || bodyText
  return(
      <Fragment key={key}>
          <Text className={className} {...props}>{children}</Text>
      </Fragment>
  )
}

export default Title;