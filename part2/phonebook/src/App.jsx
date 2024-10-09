import { useState, useEffect } from 'react'
import { getAll, remove } from './services/phonebook'
import Numbers from './components/Numbers'
import AddNew from './components/AddNew'
import FilterInput from './components/FilterInput'
const App = () => {
  const [persons, setPersons] = useState([])
  useEffect(() => {
    getAll().then(
      data => {
        setPersons(data)
      }
    )
  }, [])

  const [filterName, setFilterName] = useState('')
  const displayValue = () => {
    if (filterName == '') {
      return persons
    }
    return persons.filter(person => person.name === filterName)
  }
  const handleRemove = person => {
    const flag = window.confirm(`Delete ${person.name} ?`)
    if(flag) {

        remove(person.id).then(data => {
          setPersons(persons => persons.filter(person => person.id !== data.id))
        }).catch(() => {
          alert('delete error!')
        })
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <FilterInput name={filterName} setName={setFilterName} />
      <AddNew  persons={persons} setPersons={setPersons}/>
      <Numbers persons={displayValue()} onRemove={handleRemove}/>
    </div>
  )
}

export default App