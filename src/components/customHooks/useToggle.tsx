import { useState } from "react";

const useToggle = (initialValue?: any) => {
    console.log(typeof initialValue);
    const [value, setValue] = useState(initialValue);
    const toggleValue = (value: boolean) => setValue(value) ;
    return [value, toggleValue];
}

export default useToggle;