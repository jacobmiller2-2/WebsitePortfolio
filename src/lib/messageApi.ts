import axios from "axios";

const SENDGRID_API = `https://api.sendgrid.com/v3/mail/send`;
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const SENDER_EMAIL = process.env.MY_SENDER_EMAIL;
const RECEIVER_EMAIL = process.env.MY_RECEIVER_EMAIL;

export const sendMessageRequest = async ({ sender, name, message }) => {
  await axios.post("/api/contact", { sender, name, message });
};

export const sendMessage = async ({ sender, name, message }) => {
  const subject = `${name} has sent a message via Portfolio`;

  const formattedMessage = createMessage({
    sender: { email: sender, name },
    subject,
    message,
  });

  try {
    const res = await axios.post(SENDGRID_API, formattedMessage, {
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
      },
    });

    // console.log("messgeresponse ", res);

    return res.data;
  } catch (err) {
    console.log("err", err.response);
    console.log("err", err.response.data);
    return err;
  }
};

const createMessage = ({
  sender,
  subject,
  message,
}: {
  sender: {
    email: string;
    name: string;
  };
  subject: string;
  message: string;
}) => {
  const messageHeader = `FROM: ${sender.name}\nCONTACT: ${sender.email}\n\n`;

  const formattedMessage = `${messageHeader}${message}`;

  return {
    personalizations: [
      {
        to: [
          {
            email: RECEIVER_EMAIL,
          },
        ],
      },
    ],
    from: {
      email: SENDER_EMAIL, // Actual sender email aka me
      name: sender.name,
    },
    subject,
    content: [{ type: "text/html", value: formattedMessage }],
  };
};
