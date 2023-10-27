const Button = (props)=>{
    return(
        <div>
            <button onClick={props.onClick}> 
                {props.texte}
            </button>
            
        </div>
    )
}

export default Button