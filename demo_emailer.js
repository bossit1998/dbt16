var nodemailer=require('nodemailer');

var transporter=nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:'bossit5855@gmail.com',
        pass:'Bossbmw1806'
    }
});

var mailOptions={
    from: 'bossit5855@gmail.com',
    to: 'a.akhmedjanov@student.inha.uz',
    subject: 'Test email from node.js server',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions,function(error,info)
{
if(error) {
    console.log(error);
} else {
    console.log('Email sent: '+info.response);
}
});