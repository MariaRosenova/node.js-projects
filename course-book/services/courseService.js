const Course = require("../models/Course");
const User = require('../models/User');

exports.createCourse =  async (userId, courseData) => {

  const createdCourse = await Course.create({
    owner: userId,
    ...courseData
  });
  
     await User.findByIdAndUpdate(userId, {$push: {createdCourses : createdCourse._id}});
     return createdCourse;
};

exports.getAll = () => Course.find();

exports.getOne = (courseId) => Course.findById(courseId);

exports.getOneDetailed = (courseId) => this.getOne(courseId).populate('owner').populate('signUpList');

exports.signUp = async (courseId, userId) => {
      await Course.findByIdAndUpdate(courseId, {$push: {signUpList: userId}});
      await User.findByIdAndUpdate(userId, {$push: {signedUpCourses: courseId}});

};

exports.deleteCourse = (courseId) => Course.findByIdAndDelete(courseId);

exports.updateData =  (courseId, editedData) => Course.findByIdAndUpdate(courseId, editedData, {runValidators: true});
