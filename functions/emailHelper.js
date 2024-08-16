function createEmailOptions(name, email, subject, message) {
    const logoUrl = "https://coq-o-bec.web.app/assets/img/COClogo-simpleBlack.png"; // URL to your logo
    return {
        from: `Coq-O-Bec <shajeed0@gmail.com>`,
        replyTo: email,
        to: 'shajeed0@gmail.com', // Restaurant owner's email
        subject: `Coq-O-Bec Customer - ${name} Subject: ${subject}`,
        text: `${message}\n\nReply directly to ${name} at ${email}`,
        html: `
            <div style="text-align: center; font-family: Arial, sans-serif;">
                <img src="${logoUrl}" alt="Coq O Bec Logo" style="width: 150px; height: auto; margin-bottom: 20px;">
                <h1 style="color: #333;">New Message from ${name}</h1>
                <div style="font-size: 16px; color: #555; margin-bottom: 20px;">
                    <p>${message}</p>
                </div>
                <div style="font-size: 14px; color: #666;">
                    <strong>Reply directly to ${name} at ${email}</strong>
                </div>
            </div>
        `
    };
}
