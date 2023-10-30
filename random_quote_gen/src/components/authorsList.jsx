import {ListGroup } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import { Link, NavLink } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

function ListData({authors, heading, paths}) {

  return(
  <div className="author-sidebar-container rounded-0 min-vw-20 min-vh-40">
    <div className="author-sidebar-header">
      <Card className="rounded-0 border-0 bg-dark">
        <Card.Header className="d-flex border-0 justify-content-between align-items-start">
          <div className="sidebar-item ms-2 text-white me-auto fs-5 fw-bold">
              {heading}
          </div>
        </Card.Header>
      </Card>
    </div>

    <div className="author-sidebar-list ">
      <ListGroup as="ol" numbered>
      {authors.map((data)=> {
          return(
            <NavLink to={`${paths}${data.slug}`} className={({isActive,isPending})=>{
                    isActive? "active": isPending? "pending": ""
            }}>

                  <ListGroup.Item
                  as="li"
                  className="list-item d-flex border-0 bg-dark  justify-content-between align-items-start"
                >
                    <div className="sidebar-item h-40 overflow-auto ms-2 me-auto   text-white">
                    <li key={data._id}> {data.name}  </li>
                    </div>
                    <Badge bg="primary">{data.quoteCount}</Badge>
                </ListGroup.Item>

            </NavLink>
              )
            })}
      </ListGroup>
    </div>
  </div>
  )
}

export default ListData;
