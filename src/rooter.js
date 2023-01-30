import { BrowserRouter, Routes, Route } from "react-router-dom";
// import page component
import HomeContainer from "./components/pages/home/HomeContainer";
import AboutContainer from "./components/pages/about/AboutContainer";
import NotFoundComponent from './components/pages/notFound/NotFoundComponent'
import HeaderContainer from './components/layout/header/HeaderContainer'
import FooterContainer from "./components/layout/footer/FooterContainer";
import DetailsContainer from "./components/pages/details/DetailsContainer";
// import ROUTES
import { ROUTES } from './constants/routesConst.js'

const Rooter = () => {
  return (
    <BrowserRouter>
      <main className="main"> 
        <HeaderContainer />
          <Routes>
              <Route path={ROUTES.HOME.PATH} element={<HomeContainer />} />
              <Route path={ROUTES.DETAIL.PATH} element={<DetailsContainer />} />
              <Route path={ROUTES.ABOUT.PATH} element={<AboutContainer />} />
              <Route path={'*'} element={<NotFoundComponent />} />
          </Routes>
      </main>
      <FooterContainer />
    </BrowserRouter>
  );
}

export default Rooter;
