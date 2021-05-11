const express = require('express');
const app = express();
const signup = express.Router();
const home = express.Router();
const port = process.env.PORT || 2000;

const navbar = [
    {
        link:'/',name:'Signin'
    },
    {
        link:'/signup',name:'Signup'
    }
];
const image = [
    {
        img:'img.jpg'
    },
    {
        img:'1.jpg'
    },
    {
        img:'2.jpg'
    },
]
const nav = [
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Author'
    },
    {
        link:'/add',name:'Add'
    },
    {
        link:'/',name:'Log out'
    }
];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const addRouter = require('./src/routes/addRoutes')(nav);

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/signup',signup);
app.use('/home',home);
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/add',addRouter);

app.get('/',function(rea,res){
    res.render("index",
    {
        navbar,
        title:'Library'
    });
});

signup.get('/',function(rea,res){
    res.render("signup",
    {
        navbar,
        title:'Library'
    });
});
home.get('/',function(rea,res){
    res.render("home",
    {
        nav,
        title:'Library',
        image
    });
});


app.listen(port,()=>{console.log("Server Ready at" + port)});