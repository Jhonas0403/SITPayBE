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
      "SELECT denoCode FROM codes WHERE idAccount=? AND status=?",
      [id,true]
    );
    if (JSON.stringify(result) === "[]") {
      res.json({ status: "Error", message: "The codes don't exist" });
    } else {
      res.json({ status: "OK", result });
    }

  }catch( error){

  }
}

const updateCode = async (req, res) =>{
  try{
    const { id } = req.params;
    const {denomination} = req.body;
    const connection = await getConnection();
    await connection.query("UPDATE codes SET status=false WHERE idAccount = ? AND denoCode=?",[
      id,
      denomination
    ]);
    res.status(200).json({ message: "ok" });
  } catch (error){
    res.status(500);
    res.send(error.message);
  }
}

const getStatus = async ( req, res) => {
  try{
    const { id } = req.params;
    const {denomination} = req.body;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT status FROM codes WHERE idAccount=? AND denoCode=?",
      [id, denomination]
    );
    if (JSON.stringify(result) === "[]") {
      res.json({ status: "Error", message: "The code don't exist" });
    } else {
      res.json({ status: "OK", result });
    }


  } catch(error){
    res.status(500);
    res.send(error.message);
  }
}


export const methods ={
    createCode,
    listAllQr,
    updateCode,
    getStatus
}