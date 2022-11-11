import { getConnection } from "../database/database";

const getUsers = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT idUser, namUser,lasNamUser,rolUser FROM users "
    );

    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const addUser = async (req, res) => {
  try {
    const { namUser, lasNamUser, rolUser, emailUser, phoneUser, dniUser, passUser } = req.body;

    if (
      namUser === undefined ||
      lasNamUser === undefined ||
      rolUser === undefined ||
      dniUser === undefined ||
      passUser === undefined
    ) {
      res.status(400).json({ message: "Request need complete all fields" });
    }
    const user = { namUser, lasNamUser, rolUser, emailUser, phoneUser, dniUser, passUser };

    const connection = await getConnection();
    await connection.query("INSERT INTO users SET?", user);
    res.json({ message: "User add" , status:"OK"});
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getUsers,
  addUser
};
