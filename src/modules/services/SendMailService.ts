import { Transporter, createTransport } from 'nodemailer';
import handlebars from 'handlebars';
import fs from 'fs';
import { env } from '../../shared/env';

interface SendEmailParams {
  to: string;
  subject: string;
  variables: Record<string, unknown>;
  path: string;
}

class SendMailService {
  private client: Transporter;
  constructor() {
    this.client = createTransport({
      port: Number(env.smtpPort),
      host: env.smtpHost,
      secure: true,
      auth: {
        user: env.smtpUser,
        pass: env.smtpPassword,
      },
      debug: true,
    });
  }

  async execute({ to, subject, variables, path }: SendEmailParams) {
    const templateFileContent = fs.readFileSync(path).toString('utf-8');

    const mailTemplateParse = handlebars.compile(templateFileContent);

    const html = mailTemplateParse(variables);

    await this.client.sendMail({
      to,
      subject,
      html,
      from: env.email,
    });
  }
}

export default new SendMailService();
