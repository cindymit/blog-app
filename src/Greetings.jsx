//FIRE (function, import (sometimes), return, export).

function Greetings(props) {
  return (
    <div>
      <h1>Hello {props.name}!</h1>
      <p>My favorite color is {props.favoriteColor}!</p>
      <p>My favorite food and drink is {props.favoriteFood} and {props.favoriteDrink}.</p>
    </div>
  )
}

export default Greetings;