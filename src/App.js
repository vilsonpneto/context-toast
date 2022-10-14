import { ToastContainer } from "./Components/ToastContainer";
import { useToast } from "./contexts/toast";
import { FlexContainer } from "./styles/global";

function App() {
  const { toast } = useToast();
  return (
    <FlexContainer>
      <ToastContainer />
      <div>
        <button onClick={() => toast("Deu Muito Bom!", "success", 2000)}>
          2 segundos
        </button>
      </div>
    </FlexContainer>
  );
}

export default App;
