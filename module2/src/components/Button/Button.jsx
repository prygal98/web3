const Button = ({changeCount, text, delta})=>{

    const handleClick = (e)=>{
        console.log("handelclick")
        const deltaAttribute = e.target.dataset.delta;
        const delta = parseInt(deltaAttribute);
        changeCount(delta);
    }

    return(
        <div>
            <button onClick={handleClick} data-delta={delta} > 
                {text}
            </button>
            
        </div>
    )
}

export default Button