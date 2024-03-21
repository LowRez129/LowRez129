import { AppContainer, Footer, Header, Main } from "./AppStyles";
import Profile from "./components/profile/Profile";
import ProjectsSection from "./components/projects/ProjectsSection";
import Skills from "./components/profile/skills/Skills";

function App() {

  return (
    <AppContainer>
      <Main>
          <Profile/>
      </Main>
    </AppContainer>
  )
}

export default App
