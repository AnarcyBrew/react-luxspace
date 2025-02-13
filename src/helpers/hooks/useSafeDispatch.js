import { useCallback, useLayoutEffect, useRef } from "react";

export default function useSafeDispatch() {
    
    const mounted = useRef(false)
    
    useLayoutEffect(() => {
        mounted.current = true
        return () => {
            mounted.current = false
        }
    }, [])

    return useCallback(
        (...args) => mounted.current ? dispatch(...args) : void 0,
        [dispatch]
    )

}