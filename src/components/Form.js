import { useState } from 'react';
import Slider from './Slider';

const FormComponent = (props) => {
  const [amount, setAmount] = useState('10,000');
  const coins = [
    {
      name: 'USDC',
      price: 1.0,
    },
    {
      name: 'ETH',
      price: 2709.81,
    },
  ];
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
        {coins.map((coin) => (
          <option key={coin.name} value='{coin.value}'>
            {coin.name} 12% APY
          </option>
        ))}
      </select>
      <span>
        <label htmlFor='yearly'></label>
        <select name='yearly' id='yearly'>
          <option value='1 Year'>1 year</option>
        </select>
      </span>
      <div>
        <Slider />
      </div>
    </fieldset>
  );
};

export default FormComponent;
