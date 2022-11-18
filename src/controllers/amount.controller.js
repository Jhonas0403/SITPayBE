import { getConnection } from "../database/database";

const getAmount = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT idAcc,amoAcc FROM account WHERE idUser=?",
      id
    );
    if (JSON.stringify(result) === "[]") {
      res.json({ status: "Error", message: "The user doesn't have money" });
    } else {
      res.json({ status: "OK", result });
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
const updateAmount = async (req, res) => {
  try {
    const { id } = req.params;
    const { amount } = req.body;

    if (id === undefined || amount === undefined) {
      res.status(400).json({ message: "Requeste all filed" });
    }
    console.log("datos",id, amount);
    const connection = await getConnection();
    await connection.query("UPDATE account SET amoAcc=? WHERE idUser = ?", [
      amount,
      id,
    ]);
    res.status(200).json({ message: "ok" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getAmount,
  updateAmount,
};
