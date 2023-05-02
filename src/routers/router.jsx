import { createBrowserRouter } from "react-router-dom"
import Layouts from "../components/Layouts"
import AboutMe from "../pages/AboutMe"
import Educations from "../pages/Educations"
import Experiences from "../pages/Experiences"
import Portofolio from "../pages/Portofolio"


const router = createBrowserRouter([
   {
      element: <Layouts />,
      children: [
         {
            path: '/',
            element: <AboutMe />
         },
         {
            path: '/education',
            element: <Educations />
         },
         {
            path: '/experience',
            element: <Experiences />
         },
         {
            path: '/portofolio',
            element: <Portofolio />
         }
      ]
   }
])

export default router