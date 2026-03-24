import { createRoot } from 'react-dom/client'
import App from "./App";
import { RecoilRoot } from 'recoil';    

const root = document.getElementById('root');
createRoot(root).render(
    <RecoilRoot>

        <App />
    </RecoilRoot>
  
)
