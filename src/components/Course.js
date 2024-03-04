import { useState } from "react";
import Card from "./Card";
const Course = () => {
  const Courses = [
    {
      id: 1,
      title: "Learn Python Programming",
      author: "John Smith",
      level: "Beginner",
      rating: 4.5,
      students: 12000,
      price_inr: 3749.43,
      category: "Programming",
      image_url:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Introduction to Data Science",
      author: "Alice Johnson",
      level: "Intermediate",
      rating: 4.2,
      students: 8000,
      price_inr: 4499.32,
      category: "Data Science",
      image_url:
        "https://plus.unsplash.com/premium_photo-1673688152102-b24caa6e8725?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Web Development with React",
      author: "Emily Davis",
      level: "Advanced",
      rating: 4.7,
      students: 15000,
      price_inr: 5999.09,
      category: "Web Development",
      image_url:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Machine Learning Basics(1)",
      author: "Mark Wilson",
      level: "Intermediate",
      rating: 4.4,
      students: 10000,
      price_inr: 5249.75,
      category: "Machine Learning",
      image_url: "https://picsum.photos/300/200/?image=3",
    },
    {
      id: 5,
      title: "Advanced JavaScript Techniques",
      author: "Sophia Lee",
      level: "Advanced",
      rating: 4.6,
      students: 9000,
      price_inr: 4799.6,
      category: "Web Development",
      image_url:
        "https://media.istockphoto.com/id/1156837650/photo/javascript-code-computer-language-programming-internet-text-editor-components-display-screen.jpg?s=2048x2048&w=is&k=20&c=HRe5QixBjaBULPXU5hldznpPnQ1kSdhVL5AfPxsXG8I=",
    },
    {
      id: 6,
      title: "Cybersecurity Fundamentals",
      author: "David Brown",
      level: "Beginner",
      rating: 4.3,
      students: 7000,
      price_inr: 3499.75,
      category: "Cybersecurity",
      image_url: "https://picsum.photos/300/200/?image=4",
    },
    {
      id: 7,
      title: "Artificial Intelligence: A Modern Approach",
      author: "Alan Johnson",
      level: "Advanced",
      rating: 4.8,
      students: 18000,
      price_inr: 6999.99,
      category: "Artificial Intelligence",
      image_url:
        "https://cdn.pixabay.com/photo/2022/01/22/09/03/polygons-6956577_1280.jpg",
    },
    {
      id: 8,
      title: "iOS App Development with Swift",
      author: "Emma White",
      level: "Intermediate",
      rating: 4.5,
      students: 8500,
      price_inr: 4999.25,
      category: "Mobile Development",
      image_url:
        "https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg",
    },
    {
      id: 9,
      title: "Java Programming Masterclass",
      author: "Michael Brown",
      level: "Advanced",
      rating: 4.7,
      students: 13500,
      price_inr: 6499.5,
      category: "Programming",
      image_url:
        "https://cdn.pixabay.com/photo/2017/05/19/21/12/java-2327538_960_720.png",
    },
    {
      id: 10,
      title: "Data Visualization with Python",
      author: "Sophie Green",
      level: "Intermediate",
      rating: 4.4,
      students: 9500,
      price_inr: 5299.75,
      category: "Data Science",
      image_url:
        "https://cdn.pixabay.com/photo/2017/02/18/12/36/hacker-2077138_1280.jpg",
    },
    {
      id: 11,
      title: "React Native for Mobile Development",
      author: "Jack Thompson",
      level: "Intermediate",
      rating: 4.3,
      students: 7200,
      price_inr: 3699.8,
      category: "Mobile Development",
      image_url:
        "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 12,
      title: "Deep Learning Fundamentals",
      author: "Emily White",
      level: "Advanced",
      rating: 4.6,
      students: 11000,
      price_inr: 5999.99,
      category: "Machine Learning",
      image_url:
        "https://cdn.pixabay.com/photo/2023/01/20/05/23/artificial-intelligence-7730758_1280.jpg",
    },
    {
      id: 13,
      title: "Full Stack Web Development",
      author: "Daniel Clark",
      level: "Intermediate",
      rating: 4.5,
      students: 8200,
      price_inr: 4799.25,
      category: "Web Development",
      image_url:
        "https://cdn.pixabay.com/photo/2018/02/16/10/23/web-3157323_1280.jpg",
    },
    {
      id: 14,
      title: "Ethical Hacking (Zero to Advance)",
      author: "Alex Turner",
      level: "Advanced",
      rating: 4.7,
      students: 12500,
      price_inr: 6499.5,
      category: "Cybersecurity",
      image_url:
        "https://cdn.pixabay.com/photo/2017/05/10/12/41/hacker-2300772_1280.jpg",
    },
  ];
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
              <Card courses={course} id={course.id} />
            ))}
          </div>
          );
        </div>
      </section>
    </>
  );
};
export default Course;
