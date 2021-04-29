import { useState } from 'react'
import { FaLessThan } from 'react-icons/fa'

const AddProject = ({onAdd}) => {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name){
            alert('please add a project')
            return
        }

        onAdd({name, desc, reminder})

        setName('');
        setDesc('');
        setReminder(false);
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-group'>
                <label>Project</label>
                <input type='text' className="form-control" placeholder='Add Project Name' value={name} onChange={(e) => setName(e.target.value) }/> 
            </div>

            <div class="form-group">
                <label>Description</label>
                <input type='text' className="form-control" placeholder='Add Description' value={desc} onChange={(e) => setDesc(e.target.value) } /> 
            </div>

            {/* <div className='form-control form-control-check' >
                <label>Set Reminder</label>
                <input type='checkbox'
                checked={reminder}
                value={reminder} 
                onChange={(e) => setReminder(e.currentTarget.checked) }/> 
            </div>  */}

            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                <input class="form-check-input" type="checkbox" value={reminder} 
                id="defaultCheck1" onChange={(e) => setReminder(e.currentTarget.checked) }/>
                <label class="form-check-label" for="defaultCheck1"> Default checkbox </label>
            </div>

            <input className='btn btn-block' type='submit' value='Save Project'/>
        </form>
    )
}

export default AddProject
