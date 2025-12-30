import { Router } from 'express'
import { authRouter } from '../module/Auth/auth.router'
import { ProductRouter } from '../module/Product/product.router'

const router = Router()

const modulesRoutes = [
  {
    path: '/auth',
    pathRoute: authRouter,
  },
  {
    path: '/product',
    pathRoute: ProductRouter,
  },
 
  
]

modulesRoutes.forEach(route => router.use(route?.path, route?.pathRoute))

export default router