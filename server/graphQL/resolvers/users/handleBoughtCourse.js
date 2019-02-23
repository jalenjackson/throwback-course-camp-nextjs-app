const User =  require('../../../models/user');
const Course =  require('../../../models/course');
const { TransformObject } = require('./merge');

exports.handleBoughtCourse = async (args, req) => {
  try {
   const courseIdBuyerPaidFor = args.courseId;
   const amountOwedToSeller = deductPercentageFromPayout(+args.amountPaid, 0.25);
   
   const buyer = await User.findById(req.userId);
   console.log(req.userId)
   console.log(buyer)
   buyer.paidCourses.push(courseIdBuyerPaidFor);
   await buyer.save();
   
   const coursePaidFor = await Course.findById(args.courseId);
   const seller = await User.findById(coursePaidFor.creator);
   seller.moneyMade += amountOwedToSeller;
   await seller.save();
   return TransformObject(buyer);
  } catch (e) {
    throw e;
  }
};

const deductPercentageFromPayout = (num, percentage) => {
  return num - (num * percentage);
};
