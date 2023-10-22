import { Accordion, ListGroup } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import { Link } from 'react-router-dom'

function ListData({authors, heading, paths}) {

  console.log("From the authors list component ",authors)

  return (
    <div>
    <div className="author-sidebar-container rounded-0 min-vh-40">

    <div className="author-sidebar-header">
        {heading}
    </div>

    <div className="author-sidebar-list">

    <ListGroup as="ol" numbered>
    {authors.map((data)=> {
        return(
          <Link to={`${paths}${data.slug}`}>

                <ListGroup.Item
                as="li"
                className="d-flex border-0  justify-content-between align-items-start"
              >
                  <div className="sidebar-item h-40 overflow-auto ms-2 me-auto">
                  <li> {data.name}  </li>
                  </div>
                  <Badge bg="secondary">{data.quoteCount}</Badge>
              </ListGroup.Item>

          </Link>
            )
          })}
          </ListGroup>
    </div>

  </div>
  </div>
  )
}

export default ListData;
