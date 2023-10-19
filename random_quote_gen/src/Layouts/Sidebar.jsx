import React, { useState, useEffect, Fragment } from "react";
import { Outlet, NavLink, Link, useLoaderData } from "react-router-dom";
import axios from "axios";
import AuthorsList from "../components/authorsList";

//From redux api
import { useGetAuthorsQuery , useGetTagsQuery } from '../features/api/apiSlice'

//bootstrap
import { Accordion, ListGroup } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import Card from 'react-bootstrap/Card'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

//loaders

export const loader = () => {
  return 5;
}

//paginantion
import PaginatedItems from '../components/pagination';

//accordion utility function
export function CustomToggle({ children, eventKey })
{
  const decoratedOnClick = useAccordionButton(eventKey, () =>console.log(),);
  return (<h5 type="button" onClick={decoratedOnClick}>{children}</h5>);
}


//returned func
function Sidebar() {

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

          <div>
            <section className="sidebar-section">
              {/* Side bar */}
              <div id="sidebar" className="">

                  <br/>
                  {/** Random quotes */}
                  <Card>
                    <CustomToggle eventKey="0">
                      <h4><NavLink to="/"> Random </NavLink></h4>
                    </CustomToggle>
                  </Card>

                  <br />

                  <Accordion defaultActiveKey="0">
                    {/** Accordion  */}
                    <Card>

                      <Card.Header>
                          <CustomToggle eventKey="0"> Authors </CustomToggle>
                      </Card.Header>

                      <Accordion.Collapse eventKey="0">
                          <ListGroup as="ol" numbered>
                         {authors.results.map((data)=> {
                            return(
                              <li>{data.name}</li>
                            )
                          })}
                          </ListGroup>
                      </Accordion.Collapse>
                    </Card>

                    <br />

                    <Card>
                      <Card.Header>
                          <CustomToggle eventKey="1"> Category </CustomToggle>
                      </Card.Header>

                      <Accordion.Collapse eventKey="1">
                          <ListGroup as="ol" numbered>
                                 {category.map((data)=>
                                  {
                                    return <li> {data.name}</li>
                                  })}
                          </ListGroup>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
              </div>

              {/* main content */}
              <div id="main-content">
                  <Outlet />
              </div>
            </section>
          </div>

          );

}
export default Sidebar;
