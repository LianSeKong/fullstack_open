import { useState } from 'react'
import { create, update } from '../services/phonebook'
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
        let oldPerson = persons.find(persion => persion.name === newName)
        if (oldPerson) {
            const flag = window.confirm(`${oldPerson.name} is already added to phonebook, replacee the old number with a new one?`)
            if (flag) {
                update(oldPerson.id, {...oldPerson, number}).then(
                    data => {
                        setPersons(persons => persons.map(person => person.id === data.id ? data : person))
                    }
                )
            }
        } else {
            create({
                name: newName,
                number
            }).then(data => {
                setPersons(persons => [...persons, data])
            }).catch(error => {
                alert(error)
            })
        }

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