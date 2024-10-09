const FilterInput = ({ name, setName }) => {
    const handleChange = (e) => {
        setName(e.target.value)
    }
    return (
        <input value={name} onChange={handleChange} autoComplete='false'/>
    )
}
export default FilterInput;