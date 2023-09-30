import PropTypes from 'prop-types';
import { forwardRef, useState } from "react";
import noImage from '~/assets/images/no-image.jpeg'

const Image = forwardRef(({ src, alt, className, fallback: customFallback = noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('')

    const handleFallback = () => {
        setFallback(customFallback)
    }

    return ( 
        <img className={className} ref={ref} src={fallback || src} alt={alt} {...props} onError={handleFallback} />
     );
})

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
}

export default Image;