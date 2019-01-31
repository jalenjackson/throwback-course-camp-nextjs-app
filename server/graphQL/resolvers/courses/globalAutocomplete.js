const Course = require('../../../models/course');

exports.globalAutocomplete = async (args) => {
  try {
    const queryREQ = args.term.replace(/[^a-zA-Z0-9 ]/g, '');
    const regex = new RegExp(queryREQ, 'i');
    const courseLookup = await Course.find({
      $or: [{ title: regex }, { description: regex }, { category: regex }]
    },
    { '_id': 1,
      'title': 1,
      'description': 1,
      'category': 1,
      'price': 1,
      'color': 1,
      'image': 1,
      'date': 1,
      'rating': 1,
      'creator': 1,
    })
    .sort({ 'date':-1 })
    .limit(9);
    return courseLookup;
  } catch (e) { throw e }
};
