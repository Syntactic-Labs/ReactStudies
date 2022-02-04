const Home = () => {

  const handleClick = (e) => {
    console.log('hello, ninjas',e);
  }

  const handleClickAgain = (name,e) => {
    console.log('hello ' + name, e);
  }

  return (
    <div className="home">
      <h2>HomePage</h2>
      <button onClick={handleClick} >Click Me</button>
      <button onClick={(e) => 
        handleClickAgain('Todd',e)
      }>Click me again</button>
    </div>
  );
}
 
export default Home;