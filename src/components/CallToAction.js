const CallToAction = ({ headingTwo, headingThree }) => {
  return (
    <div className='bg-white w-3/5 px-5'>
      <h2 className='text-4xl'>{headingTwo}</h2>
      <h3 className='text-3xl'>{headingThree}</h3>

      <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button className='bg-black rounded-md text-white py-2 px-5 my-3'>Get Early Access</button>
    </div>
  );
};
export default CallToAction;
