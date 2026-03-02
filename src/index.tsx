import { Hono } from 'hono'
import { renderer } from './renderer'
import { homePage } from './pages/home'
import { aboutPage } from './pages/about'
import { productsPage } from './pages/products'
import { servicesPage } from './pages/services'
import { blogPage } from './pages/blog'
import { contactPage } from './pages/contact'

const app = new Hono()
app.use(renderer)

app.get('/',        homePage)
app.get('/about',   aboutPage)
app.get('/products',productsPage)
app.get('/services',servicesPage)
app.get('/blog',    blogPage)
app.get('/contact', contactPage)

export default app
