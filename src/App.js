import logo from './logo.svg';
import Greetings from "./Greetings"
import Post from "./Post"
import './App.css';

function App() {
  const newPost = {
    title: "is it monday",
    author: "the loons",
    body: "bruhj",
    comments: ["very in depth...", "mindboggling", "lifechanging"]
  };
  return (
    <div>
      <h1>Hello World!</h1>
      <p>My name is Cindy Mit!</p>
      <Greetings name={"Cindy"} favoriteColor={"purple"} favoriteFood={"chicken curry noodles"} favoriteDrink={"bubble tea"}/>
      <Greetings name={"Soleil"} favoriteColor={"royal blue"} favoriteFood={"pita bread"} favoriteDrink={"coffee"}/>
      <Greetings name={"Banana"} favoriteColor={"yellow"} favoriteFood={"banana cream pie"} favoriteDrink={"banana smoothie"}/>
      <Greetings name={"Nadia"} favoriteColor={"blue"} favoriteFood={"eggs florentine"} favoriteDrink={"tea"} />
      <Post title={newPost.title} author={newPost.author} body={newPost.body} comments={newPost.comments} />
    </div>
  );
}

export default App;
