import { useEffect } from 'react';

function HandlePreloader() {
    useEffect(() => {
        if (document.querySelector('.preloader')) {
            const preloader = document.querySelector('.preloader');
            setTimeout(() => {
                preloader.style.transition = 'opacity 0.5s';
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 200);
        }
    }, []);
}

export default HandlePreloader;
