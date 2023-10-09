import React, { useEffect, useState } from "react";
import "../Editor/Editor.css";
import InputControl from "../InputControl/InputControl";

const Editor = (props) => {
  const sections = props.sections;
  const Information = props.Information;
  const [activeKey, setActiveKey] = useState(Object.keys(sections)[0]); // Fixed variable naming

  const initialActiveInfo = Information[Object.keys(sections)[0]]; // Fixed variable naming
  const [ActiveInfo, setActiveInfo] = useState(initialActiveInfo);

  const [ActiveDetailIndex, setActiveDetailIndex] = useState(0);


  const [sectionTitle, setsectionTitle] = useState("");
  const [values, setvalues] = useState({
    name: ActiveInfo?.detail?.name || "",
    linkedin: ActiveInfo?.detail?.linkedin || "",
    github: ActiveInfo?.detail?.github || "",
    email: ActiveInfo?.detail?.email || "",
    title: ActiveInfo?.detail?.title || "",
    phone: ActiveInfo?.detail?.phone || "",
    StartDate: ActiveInfo?.detail?.StartDate || "",
    companyName: ActiveInfo?.detail?.companyName || "",
    location: ActiveInfo?.detail?.location || "",
    certificateLink: ActiveInfo?.detail?.certificateLink || "",
    EndDate: ActiveInfo?.detail?.EndDate || "",
    DeployLink: ActiveInfo?.detail?.DeployLink || "",
    College: ActiveInfo?.detail?.College || "",
    Summary: ActiveInfo?.detail?.Summary || "",
    other: ActiveInfo?.detail?.other || "",
    points: ["", "", "", ""],
  });

  const handlePointUpdate = (value, index) => {
    setvalues((prevValues) => {
      const updatedPoints = [...prevValues.points];
      updatedPoints[index] = value;
      return { ...prevValues, points: updatedPoints };
    });
  };

  const WorkExpBody = (
    <div className="details">
      <div className="row">
        <InputControl
          label="Title"
          placeholder="Enter Title"
          value={values.title}
          onChange={(event) =>
            setvalues((pre) => ({ ...pre, title: event.target.value }))
          }
        />
        <InputControl
          label="Company Name"
          placeholder="Enter Company Name"
          value={values.companyName}
          onChange={(event) =>
            setvalues((pre) => ({ ...pre, companyName: event.target.value }))
          }
        />
      </div>
      <div className="row">
        <InputControl
          label="Certificate link"
          value={values.certificateLink}
          onChange={(event) =>
            setvalues((pre) => ({
              ...pre,
              certificateLink: event.target.value,
            }))
          }
          placeholder="Enter Certificate Link "
        />
        <InputControl
          label="Location"
          value={values.location}
          placeholder="Enter Location"
          onChange={(event) =>
            setvalues((pre) => ({ ...pre, location: event.target.value }))
          }
        />
      </div>
      <div className="row">
        <InputControl
          label="Start Date"
          type="date"
          value={values.StartDate}
          placeholder="Enter Start Date "
          onChange={(event) =>
            setvalues((pre) => ({ ...pre, StartDate: event.target.value }))
          }
        />
        <InputControl
          label="End Date"
          type="date"
          value={values.EndDate}
          placeholder="Enter End Date"
          onChange={(event) =>
            setvalues((pre) => ({ ...pre, EndDate: event.target.value }))
          }
        />
      </div>
      <div className="coloumn">
        <label htmlFor="">Enter Work Description</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
      </div>
    </div>
  );

  const ProjectBody = (
    <div className="detail">
      <div className="row">
        <InputControl
          label="Title"
          value={values.title}
          placeholder="Enter Title"
          onChange={(event) =>
            setvalues((pre) => ({ ...pre, title: event.target.value }))
          }
        />
      </div>
      <InputControl
        label="Overview"
        placeholder="Enter Overview of Project"
        value={values.Overview}
        onChange={(event) =>
          setvalues((pre) => ({ ...pre, Overview: event.target.value }))
        }
      />

      <div className="row">
        <InputControl
          label="Deploy Link"
          placeholder="Enter The Deploy Link"
          value={values.DeployLink}
          onChange={(event) =>
            setvalues((pre) => ({ ...pre, DeployLink: event.target.value }))
          }
        />
      </div>
      <InputControl
        label="Github Link"
        placeholder="Enter The Git Link"
        value={values.github}
        onChange={(event) =>
          setvalues((pre) => ({ ...pre, github: event.target.value }))
        }
      />

      <div className="coloumn">
        <label htmlFor="">Enter Description</label>
        <InputControl
          placeholder="line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
        <InputControl
          placeholder="line 4"
          value={values.points ? values.points[3] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 3)}
        />
      </div>
    </div>
  );

  const EducationBody = (
    <div className="detail">
      <div className="row">
        <InputControl
          label="Title"
          placeholder="Enter Your Education "
          value={values.title}
          onChange={(event) =>
            setvalues((pre) => ({ ...pre, title: event.target.value }))
          }
        />

        <InputControl
          label="College/School Name"
          placeholder="Enter The College/School Name"
          value={values.College}
          onChange={(event) =>
            setvalues((pre) => ({ ...pre, College: event.target.value }))
          }
        />
      </div>
      <div className="row">
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter The Start Date For This Education"
          value={values.StartDate}
          onChange={(event) =>
            setvalues((pre) => ({ ...pre, StartDate: event.target.value }))
          }
        />

        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter The End Date For This Education"
          value={values.EndDate}
          onChange={(event) =>
            setvalues((pre) => ({ ...pre, EndDate: event.target.value }))
          }
        />
      </div>
    </div>
  );

  const BasicInfoBody = (
    <div className="detail">
      <div className="row">
        <InputControl
          label="Name"
          placeholder="Enter Your name "
          value={values.name}
          onChange={(event) =>
            setvalues((pre) => ({ ...pre, name: event.target.value }))
          }
        />

        <InputControl
          label="Title"
          placeholder="Enter The Title Like Front End "
          value={values.title}
          onChange={(event) =>
            setvalues((pre) => ({ ...pre, title: event.target.value }))
          }
        />
      </div>
      <div className="row">
        <InputControl
          label="LinkedIn"
          placeholder="Enter Linkedin Id"
          value={values.linkedin}
          onChange={(event) =>
            setvalues((pre) => ({ ...pre, linkedin: event.target.value }))
          }
        />

        <InputControl
          label="Github"
          placeholder="Enter Github Profile "
          value={values.github}
          onChange={(event) =>
            setvalues((pre) => ({ ...pre, github: event.target.value }))
          }
        />
      </div>
      <div className="row">
        <InputControl
          label="Email"
          placeholder="Enter Email like xyz@gmail.com"
          value={values.email}
          onChange={(event) =>
            setvalues((pre) => ({ ...pre, email: event.target.value }))
          }
        />

        <InputControl
          label="Enter Phone Number"
          placeholder="Enter Phone Number Here "
          value={values.phone}
          onChange={(event) =>
            setvalues((pre) => ({ ...pre, phone: event.target.value }))
          }
        />
      </div>
    </div>
  );

  const AchievementBody = (
    <div className="detail">
      <div className="coloumn">
        <label htmlFor="">List Your Achievements</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
        <InputControl
          placeholder="Line 4"
          value={values.points ? values.points[3] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 3)}
        />
      </div>
    </div>
  );

  const SummaryBody = (
    <div className="detail">
      <InputControl
        label="Summary"
        placeholder="Enter Your Objective/Summary"
        value={values.Summary}
        onChange={(event) =>
          setvalues((pre) => ({ ...pre, summary: event.target.value }))
        }
      />
    </div>
  );

  const OtherBody = (
    <div className="detail">
      <InputControl
        label="Other"
        placeholder="Enter Something"
        value={values.other}
        onChange={(event) =>
          setvalues((pre) => ({ ...pre, other: event.target.value }))
        }
      />
    </div>
  );

  const generateBody = (activeKey) => {
    switch (activeKey) {
      case "WorkExp":
        return WorkExpBody;
      case "Project":
        return ProjectBody;
      case "Education":
        return EducationBody;
      case "BasicInfo":
        return BasicInfoBody;
      case "Achievements":
        return AchievementBody;
      case "Summary":
        return SummaryBody;
      case "Other":
        return OtherBody;
      default:
        return null; // Return null for unsupported sections
    }
  };

  const handlesubmmition = () => {
    // console.log(values);
    switch (activeKey) {
      case "WorkExp": {
        const tempDetail = {
          name: values.name,
          title: values.title,
          certificateLink: values.certificateLink,
          points: values.points,
          location: values.location,
          StartDate: values.StartDate,
          EndDate: values.EndDate,
        };
        const basicInfoDetail = Information[sections.WorkExp]?.detail;
const templateDetails = Array.isArray(basicInfoDetail) ? [...basicInfoDetail] : [];
        templateDetails[ActiveDetailIndex] = tempDetail;
        
        props.setInformation((prev) => ({
          ...prev,
          [sections.WorkExp]: {
            ...prev[sections.WorkExp],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }

      case "Project": {
        const tempDetail = {
          Overview: values.Overview,
          title: values.title,
          linkedin: values.linkedin,
          github: values.github,
          DeployLink: values.DeployLink,
          points: values.points,
        };
        const basicInfoDetail = Information[sections.Project]?.detail;
const templateDetails = Array.isArray(basicInfoDetail) ? [...basicInfoDetail] : [];
templateDetails[ActiveDetailIndex] = tempDetail;


        props.setInformation((prev) => ({
          ...prev,
          [sections.Project]: {
            ...prev[sections.Project],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }

      case "Education": {
        const tempDetail = {
          title: values.title,
          StartDate: values.StartDate,
          EndDate: values.EndDate,
          College: values.College,
        };
        const basicInfoDetail = Information[sections.Education]?.detail;
const templateDetails = Array.isArray(basicInfoDetail) ? [...basicInfoDetail] : [];
        templateDetails[ActiveDetailIndex] = tempDetail;
        
        props.setInformation((prev) => ({
          ...prev,
          [sections.Education]: {
            ...prev[sections.Education],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }

      case "BasicInfo": {
        const tempDetail = {
          name: values.name,
          title: values.title,
          linkedin: values.linkedin,
          github: values.github,
          email: values.email,
          phone: values.phone,
        };
        const basicInfoDetail = Information[sections.BasicInfo]?.detail;
const templateDetails = Array.isArray(basicInfoDetail) ? [...basicInfoDetail] : [];

templateDetails[ActiveDetailIndex] = tempDetail;


        props.setInformation((prev) => ({
          ...prev,
          [sections.BasicInfo]: {
            ...prev[sections.BasicInfo],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
      case "Achievements": {
        const templetpoints = values.points
        

        props.setInformation((prev) => ({
          ...prev,
          [sections.Achievements]: {
            ...prev[sections.Achievements],
            points: templetpoints,
            sectionTitle,
          },
        }));
        break;
      }

      case "Summary": {
        const tempDetail = {
          title: values.title,
          Summary: values.Summary,
        };
        const basicInfoDetail = Information[sections.Summary]?.detail;
const templateDetails = Array.isArray(basicInfoDetail) ? [...basicInfoDetail] : [];


        props.setInformation((prev) => ({
          ...prev,
          [sections.Summary]: {
            ...prev[sections.Summary],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }

      case "Other": {
        const tempDetail = {
          title: values.title,
          other: values.other,
        };
        const basicInfoDetail = Information[sections.other]?.detail;
const templateDetails = Array.isArray(basicInfoDetail) ? [...basicInfoDetail] : [];
templateDetails[ActiveDetailIndex] = tempDetail;


        props.setInformation((prev) => ({
          ...prev,
          [sections.other]: {
            ...prev[sections.other],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }

      default:
        return null; // Return null for unsupported sections
    }
  };

  useEffect(() => {
    const activeInfo = Information[sections[activeKey]];
    setActiveInfo(Information[sections[activeKey]]);
    setsectionTitle([sections[activeKey]]);
    setActiveDetailIndex(0);
    setvalues({
      name: activeInfo?.detail?.name || "",
      linkedin: activeInfo?.detail?.linkedin || "",
      github: activeInfo?.detail?.github || "",
      email: activeInfo?.detail?.email || "",
      title: activeInfo?.detail?.title || "",
      phone: activeInfo?.detail?.phone || "",
      StartDate: activeInfo?.detail?.StartDate || "",
      companyName: activeInfo?.detail?.companyName || "",
      location: activeInfo?.detail?.location || "",
      certificateLink: activeInfo?.detail?.certificateLink || "",
      EndDate: activeInfo?.detail?.EndDate || "",
      DeployLink: activeInfo?.detail?.DeployLink || "",
      College: activeInfo?.detail?.College || "",
      Summary: activeInfo?.detail?.Summary || "",
      other: activeInfo?.detail?.other || "",
      points: ["", "", "", ""],
    });
  }, [activeKey]);

  return (
    <div className="container2">
      <div className="header2">
        {Object.keys(sections).map((key) => (
          <div
            className={`section2 ${key === activeKey ? "active" : ""}`}
            key={key}
            onClick={() => setActiveKey(key)}>
            {sections[key]}
          </div>
        ))}
      </div>
      <div className="body1">
        <InputControl
          label="Title"
          onChange={(event) => setsectionTitle(event.target.value)}
          value={sectionTitle}
          placeholder="Enter Section Title"
        />
        <div className="chips">
          {Array.isArray(ActiveInfo?.detail)
            ? ActiveInfo?.detail.map((item, index) => (
                <div
                  className={`${"chip"} ${
                    ActiveDetailIndex === index ? "active" : ""
                  }`}
                  key={item.title + index}
                  onClick={() => setActiveDetailIndex(index)}>
                  <x />
                  <p>
                    {sections[activeKey]}
                    {index + 1}
                  </p>
                </div>
              ))
            : ""}
        </div>

        {generateBody(activeKey)}

        <button onClick={handlesubmmition}>Save</button>
      </div>
    </div>
  );
};

export default Editor;
