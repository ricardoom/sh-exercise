const CallToAction = ({ headingTwo, headingThree }) => {
  return (
    <div className='bg-white w-3/5 px-5'>
      <h2 className='text-4xl'>{headingTwo}</h2>
      <h3 className='text-3xl'>{headingThree}</h3>
      <p className='text-xl my-3'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum beatae illo dolorem repellendus blanditiis nesciunt quisquam vel ab non minima
        fuga maiores unde perspiciatis repellat, delectus asperiores, suscipit sed ea?
      </p>
      <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button className='bg-black rounded-md text-white py-2 px-5 my-3'>Get Early Access</button>
    </div>
  );
};
export default CallToAction;
