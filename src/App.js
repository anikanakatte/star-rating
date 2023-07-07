import StarRating from "./StarRating";
import "./styles.css";

export default function App() {
  const numberOfStars = 5;
  return (
    <div className="App">
      <StarRating starCount={numberOfStars} />
    </div>
  );
}
