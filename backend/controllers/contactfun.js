
const contactModel = require('../Schema/contact.model')
const nodemailer = require("nodemailer");
const appPass = process.env.APP_PASS;

const getContact =  async (req,res)=>{
    const {name,email,subject,message} = req.body
  console.log(req.body)
  try {
 const contact = await contactModel.create({ name, email, message, subject });
 

 const transporter = nodemailer.createTransport({
    service:"gmail",
     service: "gmail",
      auth: {
        user: "poornima63061@gmail.com",
        pass: appPass,
      },

 })
 const mailOptions = {
  from: "poornima63061@gmail.com", // ✅ Tumhara Gmail
  to: req.body.email,
  subject: `New Contact Message from ${req.body.name}`,
  html: `
    <h2>You received a new message from your contact form</h2>
    <p><strong>Name:</strong> ${req.body.name}</p>
    <p><strong>Email:</strong> ${req.body.email}</p>
    <p><strong>Subject:</strong> ${req.body.subject}</p>
    <p><strong>Message:</strong> ${req.body.message}</p>
  `
};

// ✅ User ke liye reply email
const userReplyOptions = {
  from: "poornima63061@gmail.com",     // ✅ Tumhara Gmail
  to: req.body.email,                  // ✅ User ka email
  subject: "Thanks for contacting me!",
  html: `
    <h3>Hi ${req.body.name},</h3>
    <p>Thank you for reaching out to me. I’ve received your message and will get back to you soon.</p>
    <p><strong>Your Message:</strong></p>
    <blockquote>${req.body.message}</blockquote>
    <br>
    <p>Best Regards,<br><strong>Poornima</strong></p>
  `
};


transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("❌ Error sending to yourself:", error);
  } else {
    console.log("✅ Message sent to you:", info.response);

    // ✅ Fir user ko auto-reply bhejo
    transporter.sendMail(userReplyOptions, (err, info2) => {
      if (err) {
        console.log("❌ Error sending auto-reply to user:", err);
      } else {
        console.log("✅ Auto-reply sent to user:", info2.response);
      }
    });
  }
});

res.send({
     success:true,
    message:"send message successfully",
    your_mess:contact,
})

    
  } catch (error) {
  console.error("❌ Contact Error:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }

 }
 module.exports = getContact;