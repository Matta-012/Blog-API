const jwtGenerator = require('../helpers/jwtGenerator');

const create = async (req, res) => {
  const { email, id } = req.body;

  const token = jwtGenerator({ id, email });

  return res.status(200).json({ token });
};

module.exports = {
  create,
};
