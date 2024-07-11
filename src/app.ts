import express, { Request, Response } from "express"
import bodyParser from 'body-parser';
import { ProductsRoutes } from "./modules/student/Routes/ECommerce.route";
import { OrderRoutes } from "./modules/student/Routes/Order.route";

const app = express()

app.use(bodyParser.json());
app.use(express.json());
// app.use(cors())
app.use('/api/products', ProductsRoutes)
app.use('/api/orders', OrderRoutes)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
})

// app.use((req, res) => {
//   res.status(404).json({ success: false, message: 'Route not found' });
// });

export default app
