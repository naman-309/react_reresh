
import Home from './component/Home'
import UserContext from './context/UserContext'
import Profile from './component/Profile'
function App() {

  let studentDetails = {
    name: "Naman kkr",
    email: "naman@example.com",
    age: 20,
    present: true
  }
  let Userdata = {
    name: "pro user",
    isLoggedIn: true,
    course: "React js"
  }
  return (
    <>
      <UserContext.Provider value={{ studentDetails, Userdata }}>
        <Home></Home>
        <hr></hr>
        <Profile ></Profile>

      </UserContext.Provider>

    </>
  )
}

export default App
