import { BrowserRouter, Routes, Route, Link, Outlet, useParams, useNavigate } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <p>This is the home page content</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Learn more about our company</p>
    </div>
  );
}

function UserProfile() {
  const { userId } = useParams();
  const navigaet = useNavigate()
  return (
    <div>
      <h2>User Profile for ID: {userId}</h2>
      <button onClick={() => navigaet("/")}>Back to home</button>
    </div>
    
  )
}

function Layout() {
  return (
    <div>
      <h1>User Profile Page</h1>
      <Outlet />
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Get in touch with us</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/users">User Profiles</Link>
          </li>

        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Layout />}>
          <Route path=":userId" element={<UserProfile />} />
        </Route>
        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;