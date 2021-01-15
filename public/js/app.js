
class App extends React.Component {
  state={
    name: "",
    vegtables: "",
    meat: "",
    image: "",

  }

    render = () => {
      return (
         <div>
          <h2>Whats on tuesdays menu</h2>
          <label htmlFor ="name">Taco:</label><br/>
          <input type="text" name="name"id="name"/><br/>

          <label htmlFor ="vegtables">vegtables:</label><br/>
          <input type="checkbox"  name="vegtables"id="vegtables"/><br/>

          <label htmlFor ="meat">Meat:</label><br/>
          <input type="text" name="meat"id="meat"/><br/>

          <label htmlFor ="image">Image:</label><br/>
          <input type="text" name="image"id="image"/><br/>
        </div>
      )
    }
}

ReactDOM.render(<App></App>, document.querySelector('main'))
