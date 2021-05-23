import bcrypt from "bcrypt";
import keys from "../../config/keys";

export default async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;

  const user = keys.ADMIN_USERNAME;
  const pass = keys.ADMIN_PASSWORD;

  if (username === user) if (password === pass) res.status(200).send();
  res.status(401).send();
};
