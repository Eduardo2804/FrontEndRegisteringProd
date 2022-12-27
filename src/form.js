
function Form({button, eventKeyboard, register, obj, cancel, remover}) {

    return(

        <form>
            <input type="text" value={obj.name} onChange={eventKeyboard} name="name" placeholder="Enter product name" className ='form-control'/>
            <input type="text" value={obj.brand} onChange={eventKeyboard} name="brand" placeholder="Enter product brand" className ='form-control'/> 

            {
                button 
                ?
                <input type="button" value="Register" onClick={register} className="btn btn-primary"/>
                :
                <div>
                <input type="button" value="Alter" className="btn btn-warning"/>
                <input type="button" onClick={cancel} value="Cancel" className="btn btn-secondary"/>
                <input type="button" onClick={remover} value="Delete" className="btn btn-danger"/>
                </div>

            }

            
        </form>
    )
}

export default Form;