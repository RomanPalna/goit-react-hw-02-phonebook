const Filter = ({ value, onChange }) => (
  <label>
    Find contacs by name
    <input type="text" value={value} onChange={onChange}></input>
  </label>
);

export default Filter;
