import { useState } from 'react'

const AddNew = ({persons, setPersons}) => {
    const [newName, setNewName] = useState('')
    const [number, setNumber] = useState('')
    const handleNameChange = (e) => {
        setNewName(() => e.target.value)
    }
    const handleNumberChange = (e) => {
        setNumber(() => e.target.value)
    }
    const handleAdd = (e) => {
        e.preventDefault()
        let isExisted = persons.some(persion => persion.name === newName)
        if (isExisted) {
          alert(`${newName} is already added to phonebook`)
          return;
        }
        setPersons(persons => [...persons, {
            name: newName,
            number
        }])
    
    }
    return (
        <>
            <h3>add a new</h3>
            <form>
                <div>
                    name: <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    number: <input value={number} onChange={handleNumberChange}/>
                </div>
                <div>
                    <button type="submit" onClick={handleAdd}>add</button>
                </div>
            </form>
        </>
    )

}

export default AddNew;