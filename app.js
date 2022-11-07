// TODO

// create a GroceryList component that contains and unordered list of 2 grocery items
// render this component to the div tag in index.html with an id of app

const { useState } = React;

// GroceryListItem is just another function component

// Because we aren't using curly braces with this arrow function,
// we don't have to write a `return` statement.
// This is called 'implicit return'.
const GroceryListItem = (props) => {
  const [isOrdered, setIsOrdered] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const style = {
    textDecoration: isOrdered ? 'line-through' : 'none',
    fontWeight: isHovered ? 'bold' : 'normal'
  }

  return (
    <li
      style={style}
      onClick={() => {setIsOrdered(!isOrdered)}}
      onMouseEnter={() => {setIsHovered(!isHovered)}}
      onMouseLeave={() => {setIsHovered(!isHovered)}}
    >
      {props.item}
    </li>
  )
}

// Now, update our `GroceryList` to use the new `GroceryListItem` component
const GroceryList = (props) => (
  // const [ChexMix, PeanutButter] = props;
  <ul>
    {props.items.map((item) => (
      <GroceryListItem item={item} />
    ))}
  </ul>
);

// here we are creating an instance of GroceryList and passing in props that will be accessible at props.items
const App = () => (
  <div>
    <h2>My Grocery List</h2>
      <GroceryList items={['Chex Mix', 'Peanus Butter', 'Cheese', 'Eggs']} />
  </div>
)

ReactDOM.render(<App />, document.getElementById("app"));