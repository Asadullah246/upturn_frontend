import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import Upcoming_courses from '../Upcoming_courses';

const PopularCourses = ({courses}) => {
    return (
        <div style={{marginTop:"120px"}} className='container mx-auto '>
            <SectionTitle text={"Our Popular Courses"}/>
            <div style={{marginTop:"0px"}} className=" row row-cols-1 row-cols-md-3 g-5">
          {courses?.courses?.map((course) => (
            <Upcoming_courses
              key={course._id}
              title={course.title}
              image={course.images}
              time={course.time}
              starting_date={course.starting_date}
              mentor_image={course.mentor_image}
              mentorName={course.mentorName}
              money={course.money}
              slug={course.slug}
            />
          ))}
        </div>

        </div>
    );
};

export default PopularCourses;
