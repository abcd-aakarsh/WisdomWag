import { useState, useEffect } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import "../../index.css";

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [filteredList, setFilteredList] = useState(courses);
  const getCourses = async() => {
    const response = await fetch ('http://localhost:3000/allcourses');
    const data = await response.json()
    setCourses(data);
    setFilteredList(data);
  }
  useEffect(()=>{
    getCourses()
  },[])

  const [searchText, setSearchText] = useState("");
  return (
    <>
      <section className="course-section">
        <div className="containers">
          <h2 className="heading-secondary">A broad selection of courses</h2>
          <h3 className="heading-tertiary">Featured topics by category</h3>
          <ul className="featuring-list">
            <li>
              <button
                onClick={() => {
                  const filteredList = courses;
                  setFilteredList(filteredList);
                }}
              >
                All Courses
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  const filteredList = courses.filter(
                    (course) => course.category === "Programming"
                  );
                  setFilteredList(filteredList);
                }}
              >
                Programming
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  const filteredList = courses.filter(
                    (course) => course.category === "Web Development"
                  );
                  setFilteredList(filteredList);
                }}
              >
                Web Development
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  const filteredList = courses.filter(
                    (course) => course.category === "Data Science"
                  );
                  setFilteredList(filteredList);
                }}
              >
                Data Science
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  const filteredList = courses.filter(
                    (course) => course.category === "Cybersecurity"
                  );
                  setFilteredList(filteredList);
                }}
              >
                Cybersecurity
              </button>
            </li>
            <li>
              <input
                type="text"
                placeholder="Search Course"
                className="search-box"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                className="search-btn"
                onClick={() => {
                  const filteredList = courses.filter((course) =>
                    course.title
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  );
                  setFilteredList(filteredList);
                }}
              >
                Search
              </button>
            </li>
          </ul>
          <div className="card-container">
            {filteredList.map((course) => (
              <Link
                to={`/course/${course.id}`}
                className="card-link"
                courses={course}
                id={course.id}
              >
                <Card courses={course} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Course;
