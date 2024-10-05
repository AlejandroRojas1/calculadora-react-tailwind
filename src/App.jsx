import { useState } from 'react'
import Button from './components/button'

function App() {
  const [operation, setOperation] = useState([]);
  const [result, setResult] = useState();

  const handleButton = (value)=> {
    setOperation(operation => [...operation, value]);
  }
  const handleDelete = ()=> {
    setOperation(operation => operation.slice(0, -1))
  }
  const handleClean = ()=> {
    setOperation([])
    setResult()
  }
  const handleEqual = (nums)=> {
    const operations = nums.join('')
    const result = eval(operations)
    setResult(result)
  }


  return (
    <>
      <main className="container mx-auto mt-32 flex-col items-center w-60 border-2 border-black rounded-xl shadow-noBlur shadow-black">
        <div className='flex flex-col justify-around border border-black rounded h-24 m-3'>
          <span className=' inset-0 text-3xl font-medium whitespace-nowrap truncate px-1'
          >{operation}</span>
          <span className='inset-0 text2xl font-medium whitespace-nowrap truncate px-1 pb-3' >{result}</span>
        </div>
        <div className='bg-teal-300 rounded-xl grid grid-cols-4 grid-rows-5 justify-items-center gap-3 pt-12 pb-4 px-2'> 
          <Button handlePressButton={handleDelete} value={'DEL'}></Button>
          <Button handlePressButton={handleClean} value={'C'}></Button>
          <Button handlePressButton={handleButton} value={'%'}></Button>
          <Button handlePressButton={handleButton} value={'/'}></Button>
          <Button handlePressButton={handleButton} value={1}></Button>
          <Button handlePressButton={handleButton} value={2}></Button>
          <Button handlePressButton={handleButton} value={3}></Button>
          <Button handlePressButton={handleButton} value={'*'}></Button>
          <Button handlePressButton={handleButton} value={4}></Button>
          <Button handlePressButton={handleButton} value={5}></Button>
          <Button handlePressButton={handleButton} value={6}></Button>
          <Button handlePressButton={handleButton} value={'+'}></Button>
          <Button handlePressButton={handleButton} value={7}></Button>
          <Button handlePressButton={handleButton} value={8}></Button>
          <Button handlePressButton={handleButton} value={9}></Button>
          <Button handlePressButton={handleButton} value={'-'}></Button>

          <button 
          className='col-span-2 w-full border border-black rounded-lg shadow-noBlurButton shadow-black size-10 font-medium bg-white relative transform active:shadow-none active:translate-x-0.5 active:translate-y-0.5'
          onClick={()=>handleEqual(operation)}
          > = </button>

          <Button handlePressButton={handleButton} value={0}></Button>
          <Button value={','}></Button>
        </div>
      
      </main>
    </>
  )
}

export default App
