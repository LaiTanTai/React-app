import Welcome from "./1_component/Welcome";
import Home from "./BT_Homelayout/Home.jsx";
import Shop from "./BT_shoplayout/Shop"
import MSIlayout from "./BT_msi_layout/MSIlayout";
import Databinding from "./2_Databiding/Databinding";
import Conditionalrendering from "./3_ConditionalRendering/Conditionalrendering";
import List from "./4_List/list";
import Event from "./5_Event/event";
import State from './7_state/State'
import Selectcar from "./selectcar/selectcar";
import User from "./BT_QLSV/User_Management";
function App() {
  return (
    <div className="App">
      <User/>
    </div>
  );
}

export default App;
