import React ,{ useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Economics = () => {
  const [teacher, setTeacher] = useState([])

  useEffect(() => {
    fetch('http://localhost:2000/api/all-teachers')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const st = data.teachers.filter(s => s.subject === 'economics');
        setTeacher(st);
      })
  }, [])
  console.log(teacher);
  return (
    <div className="container">
    <div className="row">
      {
        teacher.map(te => (
          <div className="col-md-4" key={te._id}>
            <div className="card all_teacher" >
              <img className="card-img-top card_img" src={ te.profilePicture } alt="image" />
              <div className="card-body">
                <h2 className="card-title">{ te.firstName } { te.lastName }</h2>
                <div className="d-flex justify-content-between">
                  <h5>{ te.subject }</h5>
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

export default Economics;