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
import Effect from "./9_Effect/Effect";
import Memo from "./10_Memo/Memo";
import Ref from "./11_Ref/Ref";
import Usereducer from "./12_Hooks/useReducer";
import Redux from "./14_Redux/redux";
import Baucua from "./BT_baucua/Baucua";
import Redux_thunk from "./15_Redux-thunk/Redux_thunk";
function App() {
  return (
    <div className="App">
      <Redux_thunk/>
    </div>
  );
}

export default App;
