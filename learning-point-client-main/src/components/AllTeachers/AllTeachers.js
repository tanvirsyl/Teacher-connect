import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './AllTeacher.css'

const AllTeachers = () => {
  const history = useHistory();
  const [teacher, setTeacher] = useState([])

  useEffect(() => {
    fetch('http://localhost:2000/api/all-teachers')
      .then(response => response.json())
      .then(data => setTeacher(data.teachers))
  }, [])

  return (
    <div className="container">
      <div className="row">
        {
          teacher.map(te => (
            <div className="col-md-4" key={te._id}>
              <div className="card all_teacher" >
                <img className="card-img-top card_img" src={ te.profilePicture } alt="image" />
                <div className="card-body">
                  <h2 className="card-title">{`${(te.firstName + " " + te.lastName).slice(0,25)}`}</h2>
                  <div className="d-flex justify-content-between">
                    <h5>{ te.subject.slice(0,13) }</h5>
                    <h5>TIME: { te.time }</h5>
                  </div>
                  <Link to={ `teacher-info/${ te._id }` }>
                    <Button variant="success" className="btn">KNOW MORE</Button>{ ' ' }
                  </Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default AllTeachers;