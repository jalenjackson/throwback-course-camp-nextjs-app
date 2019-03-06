import { GraphQlMutate, GraphQlDevURI } from '../../../../globalHelpers/axiosCalls';
import TweenMax, {Power3} from "gsap/TweenMax";

export const getMoreCourses = async (searchTerm, page, skip, container, isAllCourses) => {
  $("html, body").animate({ scrollTop: "150px" });
  
  TweenMax.to(`.pagination-bar-loader`, 0.5, { opacity: '1', ease: Power3.easeOut });
  TweenMax.to(`.pagination-loader`, 0.5, { opacity: '1', background: 'rgba(0, 0, 0, 0.1)', ease: Power3.easeOut });
  _.times(8,i => {
    TweenMax.to(`.inner-course-map-${ i }`, 0.5, { transform: 'translate3d(0, 40px, 0)', opacity: '0', ease: Power3.easeOut, delay: 0.05 + (i * 0.05)  });
  });
  
  setTimeout(async () => {
    const getMoreCoursesResults = await GraphQlMutate(GraphQlDevURI, `
      {
        globalAutocomplete${ mutationParameter(isAllCourses, searchTerm, skip) } {
          courses {
            _id
            title
            description
            price
            rating
            sections {
              videos {
                videoLocation
              }
            }
            color
            summary
            creator {
              name
            }
          }
        }
      }
    `);
    await container.updateState('searchResults', getMoreCoursesResults.data.data.globalAutocomplete.courses);
  
    console.log(getMoreCoursesResults)
  
  }, 500);
  
  setTimeout(() => {
    _.times(8,i => {
      TweenMax.to(`.inner-course-map-${ i }`, 0.5, { transform: 'translate3d(0, 0, 0)', background: 'rgba(0, 0, 0, 0)', opacity: '1', ease: Power3.easeOut, delay: 0.35 + (i * 0.1)  });
    });
    setTimeout(() => {
      TweenMax.to(`.pagination-loader`, 0.5, { opacity: '0', ease: Power3.easeOut });
      TweenMax.to(`.pagination-bar-loader`, 0.5, { opacity: '0', ease: Power3.easeOut });
    }, 500)
  }, 350)
};

const mutationParameter = (isAllCourses, searchTerm, skip) => {
  if (!isAllCourses) {
    return `(term: "${ searchTerm }", limit: 8, skip: ${ skip })`
  } else {
    return `(term: "", limit: 8, skip: ${ skip })`
  }
};