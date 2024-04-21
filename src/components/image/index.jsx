import { Fragment } from "react";
import "./image.scss"

const Img = ({
    className, src, alt = "error", children, ...props
}) => {
    className = `Image ${className}`;

    return (
        <Fragment>
            <div className={className} {...props} >
                <img src={src} alt={alt} title={alt} />
                {children}
            </div>
        </Fragment>
    )
}

export default Img;