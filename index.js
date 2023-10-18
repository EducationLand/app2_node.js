exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from app2_node.js  and Github!"),
  }
  return response
}

