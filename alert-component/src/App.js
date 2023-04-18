import { Alert } from "./Alert";
import { variants } from "./variants";

function App() {
  return (
    <div className="">
      {variants.map((variant) => (
        <Alert variant={variant} />
      ))}
    </div>
  );
}

export default App;
