import logo from "./logo.svg";
import "./App.css";
import { OnboardingSceen } from "./Components/Onboarding/OnboardingScreen";

export const App = () => {
  return (
    <div class="App-outerContainer">
      <OnboardingSceen />
    </div>
  );
};

export default App;
