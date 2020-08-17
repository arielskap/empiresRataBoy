const success = (req:any, res:any, message:any, status:any) => {
  res.status(status || 200).send({
    error: '',
    body: message
  })
}

const error = (req:any, res:any, message:any, status:any, details:any) => {
  console.error(`[response error] ${details}`);

  res.status(status || 500).send({
    error: message,
    body: ''
  })
}

export default {
  success,
  error
}