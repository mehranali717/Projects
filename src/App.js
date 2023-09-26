import './App.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart, faCartShopping,faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Routes from './Routes/Routes';
library.add(faHeart ,faCartShopping ,faChevronDown);
function App() {
 return <Routes />
}
export default App;
