import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Card from 'react-bootstrap/Card'
import { Form, NavLink, Outlet } from 'react-router-dom'
import { useGetAuthorsQuery, useGetTagsQuery } from '../features/api/apiSlice';
import ListData from './authorsList';

function NavbarComponent() {

  const {data: authors , isLoading: authorLoading} = useGetAuthorsQuery()
  const {data: category, isLoading: categoryLoading } = useGetTagsQuery()

  console.log("Authors",authors)
  console.log("Category:", category)


  if (!authors || !category) {
    return(
      <div>
        <section className="sidebar-section">
        <div id="sidebar" className="">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
          <div id="main-content">
                  <Outlet />
          </div>
        </section>
    </div>); // You can replace this with a loading indicator
}

  return (
    <>

        <Navbar  expand={"lg"} className="bg-dark text-white" >
          <Container className="bg-dark h-5" fluid>

            <Navbar.Brand href="#">
            <div id='logo-section' className='logo-container text-center'>
              <div className='text-primary text-center bg-success w-100 logo-div'>
                  <NavLink to="/quote_generator">
                  <img src='../public/logo2.png' className='img-fluid' />
                  </NavLink>
                </div>
            </div>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"lg"}`} />

            <Navbar.Offcanvas
              id={`offcanvasdNavbar-expand-${"lg"}`}
              className="bg-dark text-white"
              aria-labelledby={`offcanvasNavbarLabel-expand-${"lg"}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"lg"}`}>
                  Quotes menu
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body className="nav-body">
                <Form method='Get' action='/quote_generator/search'>
                  <div className='search-container input-group input-group-sm w-lg-100'>
                  <input aria-label="search quotes" className='form-control me-2 w-lg-100 ' type='search' name='search' />
                  <Button type='submit' className='outline-success' variant="outline-primary" >Search</Button>
                  </div>
                </Form>
                <br/>
                <Nav className="justify-content-end d-lg-none flex-grow-1 pe-3">
                    <NavLink to="/" className="d-lg-none">
                      <Card className="rounded-2 bg-primary border-0">
                        <Card.Header className="d-flex border-0 justify-content-between align-items-start">
                          <div className="sidebar-item text-white ms-2 me-auto fs-5 fw-bold">
                          Random
                          </div>
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shuffle text-white" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"/>
                              <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"/>
                            </svg>
                          </div>
                        </Card.Header>
                      </Card>
                    </NavLink>
                    <br/>
                    <div className='d-lg-none'>
                    <ListData authors={authors.results} heading={'Authors'} paths="authorquotes/"/>
                    <br/>
                    <ListData authors={category} heading={'Category'} paths="quotestags/"/>
                    </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

          </Container>
        </Navbar>
    </>
  );
}

export default NavbarComponent;