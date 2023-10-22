import { Route, Outlet } from 'react-router-dom';

//Layout
import RootLayout from './RootLayout';
import Sidebar from './Sidebar';

//pages
import Landing from '../pages/landing';
import AuthorQuotes from '../pages/AuthorQuotes';
import QuoteTags from '../pages/QuotesByTag';

// Create a layout that includes RootLayout and Sidebar
function MainLayout() {
  return (
    <div className='main-layout'>
        <RootLayout />
        <Sidebar />
    </div>
  );
}

// Define your routes
const routesMain = (
  <Route  path='/' element={<MainLayout />}>
   <Route index element={<Landing />} />
    <Route path="authorquotes/:slug" element={<AuthorQuotes />} />
   <Route path="quotestags/:tags" element={<QuoteTags />} />
  </Route>
);

export default routesMain;
