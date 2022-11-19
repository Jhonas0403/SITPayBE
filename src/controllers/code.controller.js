import { getConnection } from "../database/database";

const createCode = async (req, res) => {
  try {
    const { idAccount, denoCode } = req.body;
    const connection = await getConnection();

    const data ={idAccount, denoCode,status:true}
    await connection.query("INSERT INTO codes SET?", data);
    res.json({ message: "Code created", status: "OK" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods ={
    createCode
}