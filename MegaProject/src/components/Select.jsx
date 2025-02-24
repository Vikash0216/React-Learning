import React ,{ useId } from "react"


function Select({label,options,clasname,...props},ref){
    const id = useId();
    return(
        <div>
            {label && <label
            htmlFor={id}
            >
            </label>}
                <select 
                id={id}
                {...props}
                className={`${clasname}`}
                ref={ref}
                >
                {options ?.map((option)=>{
                    <option key={option} value={option}>
                        {option}
                    </option>
                })}
                </select>
        </div>
    )
}
export default React.forwardRef(Select)
