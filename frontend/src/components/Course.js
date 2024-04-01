import { useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import "../../index.css";
import { Courses } from './assets/data.js';

const Course = () => {
  const [filteredList, setFilteredList] = useState(Courses);
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
                  const filteredList = Courses;
                  setFilteredList(filteredList);
                }}
              >
                All Courses
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  const filteredList = Courses.filter(
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
                  const filteredList = Courses.filter(
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
                  const filteredList = Courses.filter(
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
                  const filteredList = Courses.filter(
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
                placeholder="Search course"
                className="search-box"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                className="search-btn"
                onClick={() => {
                  const filteredList = Courses.filter((course) =>
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
