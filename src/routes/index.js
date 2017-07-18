import CoreLayout from '../layouts/PageLayout/PageLayout'
import Home from './Home'
//import PhotoManagerRoute from './PhotoManager'
import HomeRoute from './Home'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    //PhotoManagerRoute(store)
  ]
})
export default createRoutes
