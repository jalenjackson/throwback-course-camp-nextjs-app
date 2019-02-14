import LocalizedStrings from 'react-localization';
import React from "react";

let localization = new LocalizedStrings({
  en:{
    Next: 'Next',
    Back: 'Back',
    Steps: {
      Titles: [
        { title: 'Title' },
        { title: 'Language' },
        { title: 'Summary' },
        { title: 'Description' },
        { title: 'Category' },
        { title: 'Learning' },
        { title: 'Color' },
        { title: 'Price' },
        { title: 'Image' },
      ],
      AddTitle: {
        IconAlt: 'Light Bulb Icon',
        Label: 'What will the title of your course be? ',
        PopoverTitle: 'Key Points To A Great Title',
        InputPlaceholder: 'Your title goes here...',
        PopoverContent: [
          'Use popular search queries.',
          'Specify your audience.',
          'Focus on the key benefits.',
          'Keep it short and memorable.',
          'Make it accurate.',
          'Make it look as good as it would sound.',
          'Make your audience a promise.',
        ]
      },
      AddDescription: {
        IconAlt: 'Shout Icon',
        Label: 'Enter a detailed description of your course ',
        PopoverTitle: "Creating A Great Description",
        TextAreaPlaceholder: 'Your description goes here...',
        PopoverContent: [
          'Start off with a thought provoking or compelling statement.',
          'Use the features in the editor to create a visually pleasing description',
          'Include keywords that are relevant and engaging.',
          'Avoid complicated vocabulary or industry-specific jargon.',
          'Use action words or phrases.',
          'Avoid redundancies.',
          'Give a detailed description of everything you will cover.',
          'Address them directly.',
        ]
      },
      AddColor: {
        Label: 'Select a color for your course ',
        PopoverTitle: 'Selecting A Color',
        PopoverDescription: 'Choose your color wisely, because we will use this color as the main theme for your course!'
      },
      AddPrice: {
        IconAlt: 'Money Coin Svg',
        numberFieldTooltipDefaultValue: 'Enter a Number',
        Label: "How much do you want to sell your course for? Don't worry you can change this later ",
        PopoverTitle: 'Pricing',
        PopoverDescription: `Pricing your course can be tricky. You need to decide how much you are going to offer to your students.
          You maybe able to attract more customers with a lower price, but on the other hand if you feel that your
          course is far more valuable, you would want to sell you course for much higher. This
          all depends on your marketing strategy. Popular prices range between $8.99 to $350`,
        InputPlaceholder: 'Enter the price you want this course to sell for.'
      },
      Review: {
        Label: 'Review Your Course Details',
        PopoverTitle: 'Adding a image',
        CustomerViewingTab: 'When a customer is viewing',
        TaughtBy: 'Taught by',
        MoneyIconAlt: 'Money Icon',
        ViewCourse: 'View Course',
        CustomerPurchases: 'View when a customer purchases',
        GetStarted: 'Get Started',
        PopoverContent: 'Below shows how the user will view your course if they are interested directly through our website.',
        ExploreButtonPopoverContent: `When a customer clicks this button, the customer will be taken to a page to 
                                      view all of the sections available in your course.
                                      On this page they can preview your first video, see all of 
                                      the content you have to offer, as well as purchase your course.`,
        PreviewButtonPopoverContent: `When the user clicks this preview icon, they will be able to watch the entire
        first video that you upload. Usually the first video you upload would be an introduction
        or a teaser to what the customer can expect when taking your course.`,
        ExploreButton: 'Explore Button',
        PreviewButton: 'Preview Button'
      },
      AddCategory: {
        IconAlt: 'Moon Icon',
        Label: 'Add a category ',
        PopoverTitle: 'Selecting A Category',
        Placeholder: 'Add a new category...',
        PopoverContent: 'You may choose any category, but the categories that get the most attention are...',
        Categories: [
          'Software Engineering',
          'Business',
          'Design',
          'Marketing',
          'Mathematics',
          'Literature',
          'Music',
          'Geography',
          'Cooking',
          'Food',
          'Art'
        ]
      },
      AddLearning: {
        IconAlt: 'Chemistry Glass Icon',
        Label: "What will your student's learn? Press Enter/Return to add a new entry ",
        Add: 'ADD',
        PopoverTitle: "What will the student's learn?",
        PopoverDescription: 'Type in an important concept that the user will learn, and press Enter or Return to add that entry. Example...',
        PopoverList: [
          'Learn to become a master chef',
          'Learn to cut a carrot',
          'Understand advanced cooking techniques',
          'Learn to write professional, scalable JavaScript applications',
          'Learn how to draw a unicorn'
        ]
      },
      AddLanguage: {
        Label: 'What language are you teaching this course in?',
        Placeholder: 'Select a language...',
        Languages: ['English']
      },
      AddSummary: {
        IconAlt: 'Books Icon',
        Label: 'Enter a very brief summary of what your course will be about ',
        PopoverTitle: 'Writing a brief summary',
        InputPlaceholder: 'Enter your brief summary here...',
        popoverContentDescription: 'The information you enter here will appear as a summary for your course. We structure courses in the format of title then summary. Example...',
        popoverContentExample: 'Learn how to draw like a professional! Start from the basics and go all the way to master level!'
      }
    },
  },
});

export default localization;
