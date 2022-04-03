import { useState } from "react";
import { MaskedInput } from "./lib/components";

const App = () => {

  const [ dateOfBirth, setDateOfBirth ] = useState('');

  const handleChange = (value) => {
    setDateOfBirth(value);
  };

  return (
    <div>
      <MaskedInput
        type="text"
        name="dateOfBirth"
        value={dateOfBirth}
        className="form-control lo_sensitive"
        placeholder="MM/DD/YYYY"
        onChange={e => handleChange(e.target.value)}
        showMask={false}
        mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
        placeholderChar={"\u2000"}
      />
    </div>
  );
};

export default App;
