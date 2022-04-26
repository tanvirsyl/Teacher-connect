import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import userImg from '../../assets/arts.jpg';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const Dashboard = () => {
  const [teacher, setTeacher] = useState([])
  const [teacherInfo, setTeacherInfo] = useState([])
  const [tCount, setTcount] = useState([])
  const [tStripe, setTstripe] = useState([])
  const [tStudent, setTstudent] = useState([])
  const [isTeacher, setIsTeacher] = useState()
  const [isStudent, setIsStudent] = useState()
  const [emailInfo, setEmailInfo] = useState('');
  const [isAdmin, setIsAdmin] = useState();
  const [adminInfo, setAdminInfo] = useState([]);
  const [studentRequest, setStudentRequest] = useState([]);
  const [approvedByAdmin, setApprovedByAdmin] = useState([]);
  const [open, setOpen] = useState(false);

  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    fetch('http://localhost:2000/api/all-teachers')
      .then(response => response.json())
      .then(data => {
        setTcount(data.teachers)
        setTeacher(data.teachers.slice(Math.floor(Math.random() * 11), Math.floor(Math.random() * 10) + 5))
        // setReserve(data.teachers.)
      })
  }, [])

  useEffect(() => {
    fetch('http://localhost:2000/api/stripe-info')
      .then(response => response.json())
      .then(data => {
        const total = data.info.filter(num => num.email === user.email)
        setStudentRequest(data.info)
        const teacherInfo = data.info.filter(num => num.teacherEmail === user.email)
        const adminDetails = data.info.filter(num => num.email === user.email)
        setTstripe(total)
        setTeacherInfo(teacherInfo)
        setAdminInfo(adminDetails)
      })
  }, [])

  useEffect(() => {
    fetch('http://localhost:2000/api/approved-info')
      .then(response => response.json())
      .then(data => {
        const teacherInfo = data.info.filter(num => num.teacherEmail === user.email)
        setApprovedByAdmin(teacherInfo)
      })
  }, [])

  useEffect(() => {
    fetch('http://localhost:2000/api/all-users')
      .then(res => res.json())
      .then(data => {
        const teacher = data.info.filter(data => (data.role === 'teacher') && (data.email === user.email))
        if (teacher) {
          setIsTeacher(true)
          setIsStudent(false)
          setIsAdmin(false)
        }

        const tStudent = data.info.filter(s => s.role === 'student')
        setTstudent(tStudent)

        const student = data.info.find(data => (data.role === 'student') && (data.email === user.email))
        if (student) {
          setIsTeacher(false)
          setIsStudent(true)
          setIsAdmin(false)
        }

        const admin = data.info.find(data => (data.role === 'admin') && (data.email === user.email))
        if (admin) {
          setIsTeacher(false)
          setIsStudent(false)
          setIsAdmin(true)
        }
      })
  }, [])

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (email) => {
    setOpen(true);
    setEmailInfo(email)
  }

  const handleAdminClick = (id, tId, tEmail, sName, sEmail, sub) => {

    const approvedId = id;
    const teacherEmail = tEmail;
    const teacherId = tId;
    const studentName = sName;
    const studentEmail = sEmail;
    const subject = sub;

    const user = {
      approvedId, teacherEmail, teacherId, studentName, studentEmail, subject
    }

    fetch('http://localhost:2000/api/approved', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => {
        alert('Success')
        history.push('/dashboard');
      })

    fetch(`http://localhost:2000/api/delete/${ id }`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(result => {
        if (result) {
          console.log(result)
          window.location.reload(true)
        }
      })
  }

  const handleLogOut = () => {
    localStorage.clear();
    history.push('/');
    window.location.reload(true);
  }

  const handleSubmit = (e) => { /**teacher modal meet link */
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const loggedInUser = JSON.parse(localStorage.getItem('user'));

    const meet_link = data.get('link');
    const studentEmail = emailInfo;
    const teacherFirstName = loggedInUser.firstName;
    const teacherLastName = loggedInUser.lastName;
    const teacherEmail = loggedInUser.email;
    const bookedSubject = loggedInUser.subject;
    const preferredTime = loggedInUser.time;
    const meetLinkSend = 'done';

    const user = {
      meet_link, studentEmail, teacherFirstName, teacherLastName, teacherEmail, bookedSubject, preferredTime, meetLinkSend
    }

    fetch('http://localhost:2000/api/meet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => {
        alert('Success')
        history.push('/dashboard');
      })

  }

  const deleteEvent = (id) => { /* delete api*/
    fetch(`http://localhost:2000/api/delete/${ id }`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(result => {
        if (result) {
          console.log(result)
          window.location.reload(true)
        }
      })
  }

  return (
    <div>
      <input type="checkbox" id="nav-toggle" />
      <div className="sidebar">
        <div className="sidebar-brand">
          <Link to="/">
            <h2 className="white"><span className="fab fa-accusoft"></span><i>Learning</i> <span style={ { color: "#1dbf73" } }>Point</span></h2>
          </Link>
        </div>
        <div className="sidebar-menu">
          <ul>
            <li><a href="" className="active"><span className="fas fa-igloo"></span>
              <span>Dashboard</span></a>
            </li>
            <li><a href="/"><span className="fas fa-users"></span>
              <span>Home</span></a>
            </li>
            <li><a href="/more-subject"><span className="fas fa-clipboard-list"></span>
              <span>Subjects</span></a>
            </li>
            <li><a href="/about"><span className="fas fa-igloo"></span>
              <span>About</span></a>
            </li>
            <li><a href="contact-us"><span className="fas fa-igloo"></span>
              <span>Contact Us</span></a>
            </li>
            <li><a href=""><span className="fas fa-sign-out-alt"></span>
              <span onClick={ handleLogOut }>Log Out</span></a>
            </li>
            {/* <li><a href=""><span className="fas fa-igloo"></span>
              <span>Tasks</span></a>
            </li> */}
          </ul>
        </div>
      </div>

      <div className="main-content">
        <header>
          <h2>
            <label htmlFor="nav-toggle">
              <span className="fas fa-bars"></span>
            </label>
            Dashboard
          </h2>

          <div className="search-wrapper">
            <span className="fas fa-search"></span>
            <input type="search" placeholder="Search Here" />
          </div>

          <div className="user-wrapper">
            <img src={ userImg } width="30px" height="30px" alt="" />
            <div>
              <h4>{ user.firstName } { user.lastName }</h4>
              <small>{ user.email }</small>
            </div>
          </div>
        </header>

        <main>

          <div className="cards">
            <Link to='all-teacher'>
              <div className="card-single">
                <div>
                  <h1>{ tCount.length }</h1>
                  <span>Available Teachers</span>
                </div>
                <div>
                  <span className="fas fa-users"></span>
                </div>
              </div>
            </Link>

            <Link to='more-subject'>
              <div className="card-single">
                <div>
                  <h1>14</h1>
                  <span>Available Subjects</span>
                </div>
                <div>
                  <span className="fas fa-users"></span>
                </div>
              </div>
            </Link>

            {
              isStudent &&
              <div className="card-single">
                <div>
                  <h1>{ tStripe.length }</h1>
                  <span>Reserved Seat</span>
                </div>
                <div>
                  <span className="fas fa-users"></span>
                </div>
              </div>
            }

            {
              isTeacher &&
              <div className="card-single">
                <div>
                  <h1>{ teacherInfo.length }</h1>
                  <span>Requested Seat</span>
                </div>
                <div>
                  <span className="fas fa-users"></span>
                </div>
              </div>
            }

            {
              isStudent &&
              <div className="card-single">
                <div>
                  <h1>$6k</h1>
                  <span>Attended Class</span>
                </div>
                <div>
                  <span className="fas fa-google-wallet"></span>
                </div>
              </div>
            }

            {
              isTeacher &&
              <div className="card-single">
                <div>
                  <h1>{ tStudent.length }</h1>
                  <span>Total Student</span>
                </div>
                <div>
                  <span className="fas fa-google-wallet"></span>
                </div>
              </div>
            }

          </div>

          <div className="recent-grid">
            {
              isStudent &&
              <div className="projects">
                <div className="card">
                  <div className="card-header">
                    <h2>Reserved Subjects</h2>
                    <Link to='/more-subject'><button>Reserve More <span className="fas fa-arrow-right"></span></button></Link>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table width="100%">
                        <thead>
                          <tr>
                            <td>Subject Title</td>
                            <td>Teacher Name</td>
                            <td>Contact Number</td>
                          </tr>
                        </thead>
                        {
                          tStripe.map(t => (
                            <tbody>
                              <tr>
                                <td>{ t.reservedSubject }</td>
                                <td>{ t.teacherFirstName } { t.teacherLastName }</td>
                                <td>
                                  <span className="status purple"></span>
                                  { t.teacherContact }
                                </td>
                              </tr>
                            </tbody>
                          ))
                        }
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            }

            {
              isTeacher &&
              <div className="projects">
                <div className="card">
                  <div className="card-header">
                    <h2>Requested Student</h2>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table width="100%">
                        <thead>
                          <tr>
                            <td>Student Name</td>
                            <td>Subject</td>
                            <td>Email</td>
                          </tr>
                        </thead>
                        {
                          approvedByAdmin.map(t => (
                            <tbody key={ t._id }>
                              <tr>
                                <td>{ t.studentName }</td>
                                <td>{ t.subject } </td>
                                <td>
                                  <span className="status purple"></span>
                                  { t.studentEmail }
                                </td>
                                <td><Button variant="success" className="btn_meet" onClick={ () => handleClick(t.email) }>Link</Button>{ ' ' }</td>
                              </tr>
                              <tr>
                                <Dialog component="form" onSubmit={ handleSubmit } open={ open } onClose={ handleClose }>
                                  <DialogTitle>Class Link</DialogTitle>
                                  <DialogContent>
                                    <DialogContentText>
                                      To conduct class with this student, please enter your google meet link here. We
                                      will send updates to the students.
                                    </DialogContentText>
                                    <TextField
                                      autoFocus
                                      margin="dense"
                                      id="link"
                                      name="link"
                                      label="Meet Link"
                                      type="text"
                                      fullWidth
                                      variant="standard"
                                    />
                                    <DialogActions>
                                      <Button className="btn_meet" onClick={ handleClose }>Cancel</Button>
                                      <Button className="btn_meet" type="submit" onClick={ handleClose }>Send</Button>
                                    </DialogActions>
                                  </DialogContent>
                                </Dialog>
                              </tr>
                            </tbody>
                          ))
                        }
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            }

            {
              isStudent && isTeacher ?
                <div className="customers">
                  <div className="card">
                    <div className="card-header">
                      <h3>New Teachers</h3>
                      <Link to='all-teacher'>
                        <button>See all <span className="fas fa-arrow-right"></span></button>
                      </Link>
                    </div>
                    {
                      teacher.map(te => (
                        <div className="card-body" key={ te._id }>
                          <div className="customer">
                            <div className="info">
                              <img src={ userImg } width="40px" height="40px" alt="" />
                              <div>
                                <h4>{ te.firstName } { te.lastName }</h4>
                                <small>{ te.subject }</small>
                              </div>
                            </div>
                          </div>
                          <div>
                            <span className="fas fa-user-circle"></span>
                            <span className="fas fa-comment"></span>
                            <span className="fas fa-phone"></span>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
                : ''
            }


            {
              isAdmin &&
              <div className="projects">
                <div className="card">
                  <div className="card-header">
                    <h2>Request From Student</h2>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table width="100%">
                        <thead>
                          <tr>
                            <td>Student Name</td>
                            <td>Subject</td>
                            <td>Email</td>
                          </tr>
                        </thead>
                        {
                          studentRequest.map(t => (
                            <tbody key={ t._id }>
                              <tr>
                                <td>{ t.firstName } { t.lastName }</td>
                                <td>{ t.reservedSubject } </td>
                                <td>
                                  <span className="status purple"></span>
                                  { t.email }
                                </td>
                                <td><Button variant="success" className="btn_meet" onClick={ () => handleAdminClick(t._id, t.teacherId, t.teacherEmail, t.firstName, t.email, t.reservedSubject) }>Approve</Button>{ ' ' }</td>
                                <td><Button variant="danger" className="" onClick={ () => deleteEvent(t._id) }>X</Button>{ ' ' }</td>
                              </tr>
                            </tbody>
                          ))
                        }
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            }

          </div>

        </main>
      </div>
    </div>
  );
};

export default Dashboard;