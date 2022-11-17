import { getConnection } from "../database/database";


const getAmount = async(req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query(
          "SELECT amoAcc FROM account WHERE idUser=?",
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

    export const methods = {
        getAmount
    }