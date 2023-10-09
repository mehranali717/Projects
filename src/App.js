import './App.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart, faCartShopping,faChevronDown, faMinus ,faPlus , faXmark, faCopy} from '@fortawesome/free-solid-svg-icons';
import Routes from './Routes/Routes';
import 'bootstrap/dist/css/bootstrap.css';
library.add(faHeart ,faCartShopping ,faChevronDown , faMinus , faPlus , faXmark, faCopy);
function App() {
 return <Routes />
}
export default App;
