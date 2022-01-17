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
  await sendMessage({ sender, name, message });

  return res.status(202).end();
};

export default ContactAPI;
