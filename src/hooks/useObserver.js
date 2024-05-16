import {useEffect, useRef} from "react";
export const useObserver = (ref, canLoad ,isLoading, callback) => {
    const observer = useRef();
    useEffect(() => {
        if(isLoading) return;
        if(observer.current) observer.current.disconnect();
        var cb = function (entries, observer) { // Intersection Observer API
            if (entries[0].isIntersecting && canLoad) {
                // console.log("в зоне видимости!")
                // console.log(page)
                callback()
            }
            // console.log(entries)
        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current) // Этот див стал наблюдаемым.
        // Каждый раз когда он появляется в зоне видимости будет отрабатывать этот колбэк
    },[isLoading])
}