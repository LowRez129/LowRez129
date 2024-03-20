import { AppContainer } from "./AppStyles";
import Profile from "./components/profile/Profile";
import ProjectsSection from "./components/projects/ProjectsSection";
import Skills from "./components/skills/Skills";

function App() {

  return (
    <AppContainer>
      <Profile/>
      <Skills/>
      <ProjectsSection/>
    </AppContainer>
  )
}

export default App
