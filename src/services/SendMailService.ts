import nodemailer, { Transporter } from 'nodemailer';
import handlebars from 'handlebars';
import fs from 'fs';

class SendMailService {
  private client: Transporter;
  constructor() {
    try {
      nodemailer.createTestAccount().then((account) => {
        const transporter = nodemailer.createTransport({
          host: account.smtp.host,
          port: account.smtp.port,
          secure: account.smtp.secure,
          auth: {
            user: account.user,
            pass: account.pass,
          },
        });

        this.client = transporter;
      });
    } catch (error) {
      // console.log(error);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async execute(to: string, subject: string, variables: any, path: string) {
    const templateFileContent = fs.readFileSync(path).toString('utf-8');

    const mailTemplateParse = handlebars.compile(templateFileContent);

    const html = mailTemplateParse(variables);

    try {
      const message = await this.client.sendMail({
        to,
        subject,
        html,
        from: 'NPS <noreplay@nps.com.br>',
      });
      console.log('Message sent: %s', message.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
    } catch (error) {
      // console.log(error);
    }
  }
}

export default new SendMailService();
