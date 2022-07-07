// import pages components from view
import Home from './views/Home'
import About from './views/About'
import Gallery from './views/Gallery'
import ShowBlog from './views/ShowBlog'
import Contact from './views/Contact'

// routes path section
export default[
    {path:'/',component:Home},
    {path:'/about',component:About},
    {path:'/gallery',component:Gallery},
    {path:'/showblog',component:ShowBlog},
    {path:'/contact',component:Contact}
  ]