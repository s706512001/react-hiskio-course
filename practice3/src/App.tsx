import React from 'react';
import { Routes, Route, Link, Outlet, useParams, useNavigate, RouteObject, useRoutes } from 'react-router-dom';
import './App.css';

function Home() {
    const navi = useNavigate();
    return (
        <>
            <main>
                <h2>Welcome to the homepage!</h2>
                <p>You can do this, I believe in you.</p>
            </main>
            <nav>
                {/* <Link to='/about'>About</Link> */}
                <button onClick={() => { navi('about/100') }}>ABOUT</button>
            </nav>
        </>
    )
}

function About() {
    return (
        <>
            <main>
                <h2>Who are we?</h2>
                <p>
                    That feels like an existential question, don't you think?
                </p>
            </main>
            <nav>
                <Link to='/'>Home</Link>
            </nav>
            <Outlet />
        </>
    )
}

function Item() {
    const url = useParams();
    return <p>Item</p>
}

function NoMatch() {
    return <p>NoMatch</p>
}

const routeConfig: RouteObject[] = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />,
        children: [
            {
                path: '/about/:id',
                element: <Item />
            }
        ]
    },
    {
        path: '*',
        element: <NoMatch />
    }
]

function App() {
    const element = useRoutes(routeConfig);
    return (
        <div className='App'>
            <h1>Welcome to React Route!</h1>
            {/* <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />}>
                    <Route path=':item' element={<Item />} />
                </Route>
            </Routes> */}
            {element}
        </div>
    )
}

export default App;
