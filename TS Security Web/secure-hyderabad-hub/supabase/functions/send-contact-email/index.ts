import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
  service?: string;
  type: 'contact' | 'quote';
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message, service, type }: ContactEmailRequest = await req.json();
    
    console.log(`Processing ${type} request from:`, email);

    const subject = type === 'quote' ? 'New Quote Request' : 'New Contact Message';
    const serviceInfo = service ? `<p><strong>Service:</strong> ${service}</p>` : '';
    const phoneInfo = phone ? `<p><strong>Phone:</strong> ${phone}</p>` : '';

    // Send email to business
    const emailResponse = await resend.emails.send({
      from: "TS Security Solutions <onboarding@resend.dev>",
      to: ["info@tssecuritysolutions.com"],
      subject: `${subject} - ${name}`,
      html: `
        <h2>${subject}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phoneInfo}
        ${serviceInfo}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
