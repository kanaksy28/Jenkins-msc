function App() {
  
  return (
    <>
      <form>
        <p>https://github.com/kanaksy28/Jenkins-Practical</p>
        <label>Name:</label>    
        <input name="Name" type="text"/>

        <br/><br/>

        <label>Email:</label>
        <input name="Email" type="text"/>

        <br/><br/>

        <label>Age:</label>
        <input name="Age" type="number"/>

        <br/><br/>

        <label>Gender:</label>
        <input name="Gender" type="radio" id="gender" value="Female"/>Female
        <input name="Gender" type="radio" id="gender" value="Male"/>Male
    

        <br/><br/>

        <label>Password:</label>
        <input name="Confirm Password" type="password"/>

        <br/><br/>

        <label>Confirm Password:</label>
        <input name="Name" type="password"/>

        <br/><br/>

        <button type="submit" value="Submit">Submit</button>
      </form>
    </>
  )
}

export default App
