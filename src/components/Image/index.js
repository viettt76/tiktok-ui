import { forwardRef, useState } from "react";
import noImage from '~/assets/images/no-image.jpeg'

function Image({ src, alt, fallback: customFallback = noImage, ...props }, ref) {
    const [fallback, setFallback] = useState('')

    const handleFallback = () => {
        setFallback(customFallback)
    }

    return ( 
        <img ref={ref} src={fallback || src} alt={alt} {...props} onError={handleFallback} />
     );
}

export default forwardRef(Image);