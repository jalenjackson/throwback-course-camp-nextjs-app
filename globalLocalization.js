import LocalizedStrings from 'react-localization';
import React from 'react';

let GlobalLocalization = new LocalizedStrings({
  en: {
    RemovedSuccess: 'Removed Successfully!',
    GetStarted: 'Awesome! Now click the "Get Started" button!',
    SessionExpired: 'Your session expired please log in again',
    UploadImageFailure: 'Something went wrong trying to upload your image. We support JPG, JPEG, PNG, and GIF.',
    UnexpectedError: 'Oops! This is embarrassing! Something went wrong on our end. We are working diligently to get this resolved. thank you for your patience.',
    FieldsNotFilledIn: 'It looks like not all of the fields were filled in. Please go back and make sure you filled in all of the fields properly.',
    coruseCategories: [
      'Software Engineering',
      'Business',
      'Design',
      'Marketing',
      'Mathematics',
      'Literature',
      'Music',
      'Geography'
    ]
  },
});

export default GlobalLocalization;
