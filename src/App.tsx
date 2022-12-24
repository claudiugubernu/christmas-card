import Card from './components/Card/Card'

function App() {
  return (
    <div className="App">
      <section className='flex-center'>
        <Card />
        <p className="card-notice">Click card to open!</p>
      </section>
      <footer>
        <div className='top'>Klaus Gubernu &copy;</div>
        <div className='bottom' aria-hidden="true">Klaus Gubernu &copy;</div>
      </footer>
    </div>
  )
}

export default App
