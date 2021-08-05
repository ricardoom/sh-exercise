import { useState } from 'react';
import Slider from './Slider';

const FormComponent = (props) => {
  const [amount, setAmount] = useState('10,000');
  return (
    <fieldset>
      <form>
        <label htmlFor='dollarAmount'>Enter an amount</label>
      </form>
      <div>
        <input
          className='rounded-md border-2 border-gray-300 p-2'
          id='dollarAmount'
          name='dollarAmount'
          placeholder='10,000'
          type='input'
          onChange={(e) => setAmount(e.target.value)}
          onBlur={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <span>USD</span>
      </div>
      <label htmlFor='currencySelector'>Select Currency</label>
      <select name='currencySelector' id='currencySelector'>
        map goes here
      </select>
      <span>
        <label htmlFor='yearly'></label>
        <select name='yearly' id='yearly'>
          <option value='1 Year'>1 year</option>
        </select>
      </span>
    </fieldset>
  );
};

export default FormComponent;
