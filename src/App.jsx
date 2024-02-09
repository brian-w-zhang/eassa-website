import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Home from './Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import OurTeam from './pages/OurTeam.jsx';
import Constitution from './pages/Constitution.jsx';
import Events from './pages/Events.jsx';
import Academics from './pages/Academics.jsx';
import Archives from './pages/Archives.jsx';
import ContactUs from './pages/ContactUs.jsx';
import ScrollToTop from './ScrollToTop';

function App() {
  const Root = () => {
    return (
      <>
        <ScrollToTop />
        <Header />
        <div>
          <Outlet />
        </div>
        <Footer />
      </>
    );
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/constitution" element={<Constitution />} />
        <Route path="/events" element={<Events />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
