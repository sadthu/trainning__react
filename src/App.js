import logo from './logo.svg';
import './App.css';
import DemoFunction from './Component/DemoFunctionCom';
import DemoClassCom from './Component/DemoClassCom';
import BaiTapLayOut from './BaiTapLayOut/BaiTapLayOut';
import Databinding from './Databinding/Databinding';

function App() {
    return ( 
      <div>
        <BaiTapLayOut/>
        <div>
          <Databinding/>
        </div>
      </div>
      

    );
}

export default App;