import SliderComponent from './components/SliderComponent';


function App() {

  return (
    <div className='bg-white w-3/4 h-full m-auto bg-red-500'>
      <div className='text-center m-10'>
      <h1 className='sm:text-base  md:text-xl  lg:text-4xl font-bold font-mono'>View our Featured Speakers for the Event</h1>
      <p className='sm:text-sm md:text-base lg:text-lg font-normal font-mono'>Speakers are core contributors and industry thought leaders working at <span className='text-blue-800 pointer'>companies</span> that push for innovation.</p>
      </div>
      <SliderComponent />
    </div>
  )
}

export default App
 