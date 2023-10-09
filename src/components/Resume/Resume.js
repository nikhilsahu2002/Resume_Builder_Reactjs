import React, { useEffect, useState } from "react";
import "./resume.css";

const Resume = (props) => {
  const WorkExpSection = (
    <div className={`${"section"} ${"workExp"}`}>
      <div className="sectionTitle">Work Experience</div>
      <div className="content">
        <div className="item">
          <p className="title1">Full Stack Dev</p>
          <p className="subtitle">Company Name</p>
          <div className="date">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-calendar">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            1/10/2023 - 2/11/2023
          </div>
          <a className="link1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-paperclip">
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
            </svg>
            https://www.google.com
          </a>
          <a className="link1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-github">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            https://www.github.com
          </a>
          <p className="location">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-map-pin">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            Remote
          </p>
          <p className="overview">
            This Work Exp Is Dummy Work Exp With Nothing
          </p>
          <ul className="points">
            <li className="point">Point 1</li>
            <li className="point">Point 2</li>
            <li className="point">Point 3</li>
            <li className="point">Point 4</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const projectSection = (
    <div className={`${"section"} ${"project"}`}>
      <div className="sectionTitle">Project</div>
      <div className="content">
        <div className="item">
          <p className="title1">Full Stack Dev</p>
          <p className="subtitle">Company Name</p>
          <a className="link1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-paperclip">
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
            </svg>
            https://www.google.com
          </a>
          <div className="date">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-calendar">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            1/10/2023 - 2/11/2023
          </div>
          </div>
          </div>
    </div>
  );

  const educationSection = (
    <div className={`${"section"} ${"education"}`}>
      <div className="sectionTitle">Education Section</div>
      <div className="content">
        <div className="item">
          <p className="title1">MCA</p>
          <p className="subtitle">United Univestiy</p>
          <div className="date">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-calendar">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            1/10/2023 - 2/11/2023
          </div>
        </div>
      </div>
    </div>
  );

  const achievementsSection = (
    <div className={`${"section"} ${"achievements"}`}>
      <div className="sectionTitle">Achievements</div>
      <ul className="numbered">
        <li>achievement 1</li>
        <li>achievement 2</li>
        <li>achievement 3</li>
        <li>achievement 4</li>
        <li>achievement 5</li>
      </ul>
    </div>
  );

  const SummarySection = (
    <div className={`${"section"} ${"Summary"}`}>
      <div className="sectionTitle">Summary</div>
      <div className="content">
        <div className="overview">
            this is dummy basic summary
        </div>
      </div>
    </div>
  );

  const otherSection = (
    <div className={`${"section"} ${"other"}`}>
      <div className="sectionTitle">Other</div>
      <div className="content">
        <div className="overview">
            this is dummy basic summary
        </div>
      </div>
    </div>
  );

  const [columns, setColumns] = useState([
    [projectSection, educationSection, SummarySection],
    [WorkExpSection, achievementsSection, otherSection],
  ]);

  useEffect(() => {
    setColumns([
      [projectSection, educationSection, SummarySection],
      [WorkExpSection, achievementsSection, otherSection],
    ]);
  }, []);

  return (
    <div className="container6">
      <div className="header6">
        <p className="heading6">Name</p>
        <p className="subheading6">Blockchain Developer</p>
        <div className="links">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-at-sign">
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
          </svg>
          <a className="link">example@gmail.com</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-phone">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <a className="link">Phone</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-linkedin">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          <a className="link">http://linkedin.in//feed</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-github">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          <a className="link">http://github/nikhilsahu</a>
        </div>
      </div>
      <div className="main2">
        <div className="col1">
          {columns[0].map((section, index) => (
            <div key={index}>{section}</div>
          ))}
        </div>
        <div className="col2">
          {columns[1].map((section, index) => (
            <div key={index}>{section}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
