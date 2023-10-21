import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { black } from "tailwindcss/colors";

function Timeline() {
  const timelineItems = [
    // {
    //   date: "July 2018 -  Oct 2021",
    //   title: "Master Of Computer Application",
    //   location: "MIT, Pune",
    // },
    {
      date: "June - May, 2020, 2021",
      title: "Full Stack Developer Intern",
      location: "Huda Technologies, Pune",
    },
    {
      date: "Nov 2020 - April 2021",
      title: "Full Stack Developer Intern",
      location: "Bizmetric, Pune",
    },
    {
      date: "May 2021 - Jan 2022",
      title: "Associate Software Engineer",
      location: "Bizmetric, Pune",
    },
    {
      date: "Nov 2021 - Present",
      title: "Blogger",
      location: "Medium.com",
      content:
        "I write blogs about Web/Mobile Development, having over 680+ followers, with over 100k views.",
    },
    {
      date: "Feb 2022 - Present",
      title: "Software Engineer",
      location: "CCR Technologies",
    },
  ];



 let icons=[
 //<img src="https://images.collegedunia.com/public/college_data/images/logos/1684479642Screenshot20230518105113.png"/>,
<img src="https://hudastechnologies.com/images/logo.png"
/>,<img src="https://media.licdn.com/dms/image/C510BAQEHj3_SBhJ-Zw/company-logo_200_200/0/1537804728723/bizmetric_logo?e=2147483647&v=beta&t=EMU4PE70vxa2ny6-4PBGIM4J3jqDF-AQsYdjR7T-OJQ"/>,
<img src="https://media.licdn.com/dms/image/C510BAQEHj3_SBhJ-Zw/company-logo_200_200/0/1537804728723/bizmetric_logo?e=2147483647&v=beta&t=EMU4PE70vxa2ny6-4PBGIM4J3jqDF-AQsYdjR7T-OJQ"/>,
<img src="https://seeklogo.com/images/M/medium-2020-new-logo-4DD1CA1BFF-seeklogo.com.png"/>,
<img src="https://media.licdn.com/dms/image/C510BAQFJe2R-Ua3RLw/company-logo_200_200/0/1570778089350?e=2147483647&v=beta&t=Veq5LfpVHFlP7Aa-pp7E7vA-MwHeILIZinlY_ug2aDE"/>

]
let color=["#00ffe2",]
  return (
    <>
    {/* <div class="text-4xl flex items-center justify-center h-screen"> Timeline 🚴🏽 </div> */}
    <h1 class="text-4xl flex items-center justify-center mt-8">Timeline 🚴🏽</h1>
    
    <div className="mx-auto ">
    
      <VerticalTimeline>
        {timelineItems.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={<div className="mx-4">{item.date}</div>}
            contentStyle={{  background: index%2==0?'#00ffe2':"white", color: "black", }} // Adding the connecting line
            contentArrowStyle={{ borderRight: '7px solid #3498db' }}
            iconStyle={{ background: "transparent", color: "#3498db", border: '2px solid #3498db', padding:"16px" , marginRight:"4px" }}
            icon={icons[index]}
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{item.location}</h4>
            <p>{item.content}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
    </>
  );
}

export default Timeline;
