import Button from './components/button'

function App() {

  return (
    <>
      <main className="container mx-auto mt-32 flex-col items-center w-60 border-2 border-black rounded-xl shadow-noBlur shadow-black">
        <div className='h-24 '> 
          
        </div>
        <div className='bg-teal-300 rounded-xl grid grid-cols-4 grid-rows-5 justify-items-center gap-3 pt-12 pb-4 px-2'> 
          <Button value={'DEL'}></Button>
          <Button value={'C'}></Button>
          <Button value={'%'}></Button>
          <Button value={'/'}></Button>
          <Button value={1}></Button>
          <Button value={2}></Button>
          <Button value={3}></Button>
          <Button value={'*'}></Button>
          <Button value={4}></Button>
          <Button value={5}></Button>
          <Button value={6}></Button>
          <Button value={'+'}></Button>
          <Button value={7}></Button>
          <Button value={8}></Button>
          <Button value={9}></Button>
          <Button value={'-'}></Button>
          <Button custom='col-span-2' value={'='}></Button>
          <Button value={0}></Button>
          <Button value={','}></Button>
        </div>
      
      </main>
    </>
  )
}

export default App
