import Content from "./Content";
import Header from "./Header"
import Total from "./Total";
const Course = ({ course }) => {
    const num = course.parts.reduce((prev, cur) => prev + cur.exercises ,0)
    console.log(num);
    
    return (
        <>
            <Header title={course.name}/>
            <Content parts={course.parts}/>
            <Total  num= {num} />
        </>
    )

}

export default Course;