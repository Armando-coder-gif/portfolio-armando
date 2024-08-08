import Menu from "./components/MenuBar";
import Name from "./components/Name";
import WorkExperience from "./components/WorkExperience";
import ContactMe from "./components/ContactMe";
import { DarkModeProvider } from './context/DarkMode';
import './styles/Global.css';
import './styles/Name.css';
import './styles/WorkExperience.css';

function App() {
  return (
    <>
      <DarkModeProvider>
        <Menu/>
        <div className="main-content">
          <section id="about">
            <Name name='Armando González' />
            <p className="intro-text">
              I am a full stack developer with experience in Node.js, C#, JavaScript, React, TypeScript, HTML, CSS, Bootstrap, Material UI, Python, Git, GitHub, Jira, Zoho Project, .NET, Windows Forms, SQL Server, MySQL, MVC Pattern, SOLID Principles.
              <br /><br />
              In addition to my technical skills, I excel in problem-solving, effective communication, and teamwork. I am passionate about continuous learning, proactive in my approach to challenges, and committed to delivering high-quality results.
            </p>
          </section>
          <section id="work">
            <WorkExperience />
          </section>
          <section id="contact">
            <ContactMe />
          </section>
        </div>
      </DarkModeProvider>
    </>
  )
}

export default App;
