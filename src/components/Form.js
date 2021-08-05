import { useState } from 'react';
import Slider from './Slider';

const FormComponent = () => {
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
  const exchanges = [
    {
      name: 'StableHouse',
      rate: 12,
    },
    {
      name: 'BlockFi',
      rate: 10,
    },
    {
      name: 'Celsius',
      rate: 8,
    },
    {
      name: 'Nexo',
      rate: 4,
    },
  ];
  return (
    <fieldset>
      <form>
        <label className='text-xs block mt-4' htmlFor='dollarAmount'>
          Enter an Amount
        </label>
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
        <span className='text-sm text-gray-400 pt-2 pl-2'>USD</span>
      </div>
      <label className='block text-xs mt-4' htmlFor='currency'>
        Select Currency
      </label>
      <select className='block rounded-md border-2 p-2' name='currencySelector' id='selectCurrency'>
        {coins.map((coin) => (
          <option key={coin.name} value='{coin.value}'>
            {coin.name} 12% APY
          </option>
        ))}
      </select>
      <span>
        <label className='inline-block text-xs' htmlFor='yearly'>
          Interest earned after
        </label>
        <select className='inline-block mt-4 border-2 rounded-2xl ml-4 p-1 text-sm' name='countYear' id='yearly'>
          <option value='1 Year'>1 year</option>
        </select>
      </span>
      <div className='flex flex-row mt-8'>
        <Slider exchangeData={exchanges} />
      </div>
    </fieldset>
  );
};

export default FormComponent;
