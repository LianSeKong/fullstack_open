import { useState } from 'react'
import Numbers from './components/Numbers'
import AddNew from './components/AddNew'
import FilterInput from './components/FilterInput'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [filterName, setFilterName] = useState('')
  const displayValue = () => {
    if (filterName == '') {
      return persons
    }
    return persons.filter(person => person.name === filterName)
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <FilterInput name={filterName} setName={setFilterName} />
      <AddNew  persons={persons} setPersons={setPersons}/>
      <Numbers persons={displayValue()} />
    </div>
  )
}

export default App