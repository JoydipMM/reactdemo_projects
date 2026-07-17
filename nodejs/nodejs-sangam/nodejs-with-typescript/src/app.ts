import express, { Express, Response, Request } from 'express';
import User, { IUser } from './models/User';
const app: Express = express();
const port = 3000;

app.use(express.json());

app.get('/', (req :Request, res: Response) => {
    res.send('Hello World!');
});

interface UserInterface{
    name: string,
    email: string,
}

app.post('/user', (req: Request<{},{}, UserInterface>, res: Response) => {
    const { name, email} = req.body;
    res.send(`Hello, ${name} ${email}`);
});

app.post("/user/:id", (req:Request<{id: string},{}, UserInterface>, res:Response)=>{
    const { id } = req.params
    const { name, email} = req.body
    res.json({
        userid: id,
        userinfo:{
            name: name,
            email: email
        }
    })
})

app.get('/newusers', async (req: Request, res: Response) => {
    try {
        const users: IUser[] = await User.find();
        res.json(users);
    } catch (error) {
        console.log(error);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});