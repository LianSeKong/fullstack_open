

const Numbers = ({ persons, onRemove }) => {
    const handleClick = person => {
        onRemove(person)
    }
    
    return (
        <>
            <h2>Numbers</h2>
            {
                persons.map(
                    person => (
                        <p key={person.id}>
                            <span>{person.name} {person.number}</span>
                            &nbsp;<button onClick={() => handleClick(person)}>delete</button>
                        </p>
                    )
                )
            }
                


        </>
    )
}

export default Numbers;