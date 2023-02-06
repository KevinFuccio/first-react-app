const buttonComponent = (props)=>{
    return(
        <div>
            <button style={{color: 'red', background: 'black', border: 'none', width: '150px',height: '150px', fontSize: '32px'}}>{props.title}</button>
        </div>
    )
}
export default buttonComponent