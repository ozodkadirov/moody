import {Fragment} from "react";
import "./button.scss";
import { Link } from 'react-router-dom'
const Button = ({className,key, href, children,type, secondary, primary, ...props}) => {
    className = `Button ${primary ? "Button__primary" : ``} ${secondary ? "Button__secondary" : ""} ${className}`;
    const Tag = href ? Link : "button"
    return(
        <Fragment key={key}>
            <Tag type={type} className={className} to={href} {...props}>{children}</Tag>
        </Fragment>
    )
}
export default Button;