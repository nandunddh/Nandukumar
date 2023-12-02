exports.success = ({ res, data = [], status = 200, msg }) => {
  let success = true
  if (data.length === 0 && typeof data === 'Array') success = false
  // else if (data === null) success = false
  else if (Object.keys(data).length === 0) success = false
  else
    return res.status(status).json({
      success: true,
      msg,
      data,
    })
}
