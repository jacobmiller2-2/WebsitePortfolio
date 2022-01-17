import { sendMessage } from "lib/messageApi";
import { NextApiRequest, NextApiResponse } from "next";

const ContactAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  const { sender, name, message } = req.body;

  if (!name || !sender || !message) {
    return res.status(400).json({
      message: "Bad request",
    });
  }
  const emailResponse = await sendMessage({ sender, name, message });

  console.log("emailResponserrfw", emailResponse.data);

  return res.status(200).json({});
};

export default ContactAPI;
