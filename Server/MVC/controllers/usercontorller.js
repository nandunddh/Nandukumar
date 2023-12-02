const { success } = require('../../src/Helper/Response')

const data = require('../models/userDataModel')
const userData = require('../models/index')

exports.list = async (req, res) => {
  try {
    // const userdata = await userData.find({}).limit(1);
    const userdata = await userData.find({}).sort({ _id: -1 })
    return success({ res, msg: 'User Data', status: 200, data: userdata })
  } catch (error) {}
}

exports.details = async (req, res) => {
  try {
    const userdata = await userData.findById(req.params.id)

    if (userdata === null)
      return res.json({
        success: false,
        msg: 'no data found',
        data: {},
        status: 404,
      })
    // return success({ res, msg: 'no Data', status: 200, data: [] })
    else {
      // console.log('data')
      return success({ res, msg: 'User Data', status: 200, data: userdata })
    }
  } catch (error) {
    return success({ res, msg: error.message, status: 500, data: {} })
  }
}

exports.create = async (req, res) => {
  try {
    const data = await new userData({ ...req.body }).save()
    // console.log('data', { ...req.body })
    return success({ res, msg: 'Created succes', data: data, status: 200 })
  } catch (error) {
    return success({ res, msg: error.message, status: 500, data: {} })
  }
}

exports.remove = async (req, res) => {
  try {
    const userdata = await userData.findByIdAndDelete(req.params.id)
    if (userdata == null) {
      // console.log('data', userdata)
      // return success({ res, msg: 'user not found', status: 404 })
      return res.status(404).json({
        success: false,
        msg: 'no data found',
        data: {},
        status: 404,
      })
    } else {
      return success({ res, msg: 'User deleted', data: userdata, status: 200 })
    }
  } catch (error) {
    return success({ res, msg: error.message, data: {}, status: 500 })
  }
}

exports.update = async (req, res) => {
  try {
    const userdata = await userData.findByIdAndUpdate(req.params.id, req.body)

    if (userdata == null) {
      // console.log('data', userdata)
      // return success({ res, msg: 'user not found', status: 404 })
      return res.status(404).json({
        success: false,
        msg: 'no data found',
        data: {},
        status: 404,
      })
    } else {
      return success({
        res,
        msg: 'User data updated!',
        data: userdata,
        status: 200,
      })
    }
  } catch (error) {
    return success({ res, msg: error.message, data: {}, status: 500 })
  }
}
