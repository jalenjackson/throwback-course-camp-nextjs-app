export const userPaidForCourseAlready = (auth, course) => {
  if (auth.authenticated && auth.paidCourses) {
    return auth.paidCourses.find(c => c._id === course._id ) !== undefined;
  }
};

export const didTheUserCreateThisCourse = (userIdFromCourse, userId) => {
  return userIdFromCourse === userId;
};

export const checkIfUserHasAccess = (auth, course, router) => {
  if (course) {
    if (didTheUserCreateThisCourse(course.creator._id, auth._id) || userPaidForCourseAlready(auth, course)) {
      return true;
    } else {
      router.push('/');
      return false;
    }
  } else {
    router.push('/');
    return false;
  }
};