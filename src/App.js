import './App.scss';
import NavBar from './components/navbar/navbar';
import SideBar from './components/sidebar/sidebar';
import HomePage from './pages/home_page/home_page';

function App() {
  return (
    <div className="flex justify-center bg-secondary-dark text-white">
      <div className="Layout w-[100vw] h-[100vh] max-w-[1660px]">
        <div id="sidebar" className=" m-5 mr-4 ml-4">
          <SideBar />
        </div>
        <div id="main-page" className="overflow-y-scroll">
          <div className="m-5 mr-4 ml-4">
            <NavBar />
            <div className="mt-10">
              <HomePage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
