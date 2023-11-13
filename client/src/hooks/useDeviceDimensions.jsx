import { useEffect } from 'react';

function useDeviceDimensions(setApp) {
    const setOrientation = () => {
        let type;
        const w = window.innerWidth;
        const h = window.innerHeight;
        const ratio = Math.round(w/h * 100)/100;

        if (w <= 800) {
            type = 'mobile'
        } else if (ratio > 1.75) {
            type = 'long'
        } else {
            type = 'standard'
        }
        const d = {w,h,ratio,type}
        setApp({type: 'dimensions',payload:d});
    }

    useEffect(() => {
        setOrientation();
        window.addEventListener('resize', setOrientation);

        return () => window.removeEventListener('resize', setOrientation)
    }, [])
}

export default useDeviceDimensions