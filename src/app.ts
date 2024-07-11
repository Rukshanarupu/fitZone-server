import express, { Request, Response } from "express"
import bodyParser from 'body-parser';
import { routes } from "./route/routes";
import globalErrorHandler from "./middleWare/globalErrorHandler";
import cors from 'cors'

// const app: Application = express()
const app = express()

//....... middleware
// app.use(cors({ origin: ['http://localhost:5173'] }))
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());


//...... application routes
app.use('/api', routes)

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to FitZone Server");
})

// customize error
app.use(globalErrorHandler)

// app.use((req: Request, res: Response, next: NextFunction) => {
//   res.status(404).json({ success: false, message: 'Route not found',error: '' });
// });


export default app

