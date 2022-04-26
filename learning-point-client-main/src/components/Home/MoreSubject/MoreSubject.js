import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import business from '../../../assets/business.jfif'
import arts from '../../../assets/arts.jpg';
import science from '../../../assets/science.jfif';
import './MoreSubject.css';

const MoreSubject = () => {
 
  return (
    <div className="subjectList">
        <div>
          <Navigation />
          <div className="text-center">
            <h2 className="mt-5">More Subjects For You</h2>
            <hr></hr>
          </div>
      </div>
      <div className="row container mt-5 mb-5 ml-auto mr-auto">
        <div className="col-md-4">
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={business}
                alt="green iguana"
              />
              <CardContent>
                <h3>Business Tutors</h3>
                <ul>
                  <li>
                    <Link to='/economics'>Economics Tutors</Link>
                  </li>
                  <li>
                    <Link to='/accounting'>Accounting Tutors</Link>
                  </li>
                  <li>
                    <Link to='/marketing'>Marketing Tutors</Link>
                  </li>
                  <li>
                    <Link to='/finance'>Finance Tutors</Link>
                  </li>
                </ul>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={science}
                alt="green iguana"
              />
              <CardContent>
                <h3>Science Tutors</h3>
                <ul>
                  <li>
                    <Link to='/physics'>Physics Tutors</Link>
                  </li>
                  <li>
                    <Link to='/chemistry'>Chemistry Tutors</Link>
                  </li>
                  <li>
                    <Link to='/higher-math'>Higher Math Tutors</Link>
                  </li>
                  <li>
                    <Link to='/biology'>Biology Tutors</Link>
                  </li>
                </ul>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className="col-md-4">
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={arts}
                alt="green iguana"
              />
              <CardContent>
                <h3>Humanities Tutors</h3>
                <ul>
                  <li>
                    <Link to='/history'>HistoryTutors</Link>
                  </li>
                  <li>
                    <Link to='/english'>English Tutors</Link>
                  </li>
                  <li>
                    <Link to='/geology'>Geology Tutors</Link>
                  </li>
                  <li>
                    <Link to='/civics'>Civics Tutors</Link>
                  </li>
                </ul>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default MoreSubject;