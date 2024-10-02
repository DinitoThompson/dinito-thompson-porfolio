import { ContactEmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_EMAIL_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "Your Portfolio <onboarding@resend.dev>",
      to: "dinitothompson@gmail.com",
      subject: `New contact form submission from ${name}`,
      react: ContactEmailTemplate({ name, email, message }),
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json(
      { error: "Internal Server Error: " + error },
      { status: 500 }
    );
  }
}
