import { Home } from './pages/Home';
import './styles/theme.css';
import './styles/global.css';
import { TaskContextProvider } from './Context/TaskContext/taskContextProvider';
import { MessagesContainer } from './components/MessagesContainer';

export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <Home />
      </MessagesContainer>
    </TaskContextProvider>
  );
}
