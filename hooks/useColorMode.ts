import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function useColorMode(){
    const [colorMode,setColorMode] = useLocalStorage("color-mode","light");
    useEffect(()=>{
        const className = 'dark';
        const bodyClases = window.document.body.classList;

        colorMode === 'dark' ? bodyClases.add(className) : bodyClases.remove(className);

    },[colorMode]);

    return [colorMode,setColorMode];
}

export default useColorMode;