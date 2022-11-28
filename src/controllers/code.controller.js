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
const listAllQr = async (req, res) => {
  try{
    const {id} = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT denoCode FROM codes WHERE idAccount=?",
      id
    );
    if (JSON.stringify(result) === "[]") {
      res.json({ status: "Error", message: "The codes don't exist" });
    } else {
      res.json({ status: "OK", result });
    }

  }catch( error){

  }
}

export const methods ={
    createCode,
    listAllQr

}