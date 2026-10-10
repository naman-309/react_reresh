
function App() {



  let data = true

  if (data === true) {
    return (
      <>
        <h5>CONDITIONAL RENDERING </h5>
        <p>beacuse  data  value is true</p>
      </>
    )
  } else {
    return (
      <>
        <p>not rendered because  data  value is false</p>
      </>)
  }

}

export default App
