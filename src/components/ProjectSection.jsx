import Project from "./Project"
// import quizApp from "../assets/images/quiz-app.jpg"
import Slider from "react-slick"
import { NextArrow, PrevArrow } from "./arrows";
import imgConfigs from "../assets/configs/images";

const ProjectSection = ({Projects, title}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: (Projects >= 4) ? 4 : Projects.length,
        slidesToScroll: (Projects >= 4) ? 4 : Projects.length,
        initialSlide: 0,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 500,
            settings: {
              slidesToShow: (Projects >= 3) ? 3 : Projects.length,
              slidesToScroll: (Projects >= 3) ? 3 : Projects.length,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: (Projects >= 2) ? 2 : Projects.length,
              slidesToScroll: (Projects >= 2) ? 2 : Projects.length,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: (Projects >= 1) ? 1 : Projects.length,
              slidesToScroll: (Projects >= 1) ? 1 : Projects.length
            }
          }
        ]
      };
    return (
        <section className="projects-section" id={title}>
            <h2>{title}</h2>
            <div className="projects slider-container">
                <Slider {...settings} >
                  {
                    Projects.map((project, id) => {
                      return (
                        <Project
                          key={id}
                          img={imgConfigs[project.image]}
                          description={project.description}
                          link={project.link}
                          name={project.title}
                      />
                      )
                    })
                  }
                {/* <Project
                    img={quizApp}
                   description={"Standard & Smart Quiz App with one HTML, CSS"}
                    link={"/"}
                    name={"Quiz App"}
                />
                 */}
                </Slider>
            </div>
            
            
        </section>
    )
}
export default ProjectSection