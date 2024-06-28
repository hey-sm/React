import { useState } from "react";
import { Button } from "@/components/ui/button";
import Login from "./views/login";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Login></Login>
      <Button variant="secondary">Secondary</Button>
    </>
  );
}

export default App;
