import emailjs from "@emailjs/browser";

export type WaitlistTemplateParams = {
  to_email?: string;
  email?: string;
  admin_email?: string;
  reply_to?: string;
  platform_name?: string;
  website_url?: string;
  subject?: string;
  message?: string;
};

export async function sendWaitlistAcknowledgement(
  userEmail: string
): Promise<void> {
  console.log("Starting email send process for:", userEmail);
  
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as
    | string
    | undefined;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as
    | string
    | undefined;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as
    | string
    | undefined;

  console.log("EmailJS Config Check:", {
    hasServiceId: !!serviceId,
    hasTemplateId: !!templateId,
    hasPublicKey: !!publicKey,
    serviceId: serviceId ? serviceId.substring(0, 5) + "..." : "missing",
    templateId: templateId ? templateId.substring(0, 5) + "..." : "missing",
    publicKey: publicKey ? publicKey.substring(0, 5) + "..." : "missing"
  });

  if (!serviceId || !templateId || !publicKey) {
    const missingVars = [];
    if (!serviceId) missingVars.push("VITE_EMAILJS_SERVICE_ID");
    if (!templateId) missingVars.push("VITE_EMAILJS_TEMPLATE_ID");
    if (!publicKey) missingVars.push("VITE_EMAILJS_PUBLIC_KEY");
    
    const errorMsg = `EmailJS environment variables are missing: ${missingVars.join(", ")}. Please check your .env file.`;
    console.error(errorMsg);
    throw new Error(errorMsg);
  }
  const templateParams: WaitlistTemplateParams = {
    to_email: userEmail,
    email: userEmail,
    admin_email: "yashagrawalrkt123@gmail.com",
    reply_to: userEmail,
    platform_name: "Code Bets",
    website_url: "https://codebets.vercel.app/",
    subject: "Welcome to Code Bets Early Access Waitlist! 🏆",
    message: `Thank you for joining the Code Bets waitlist! 

🎯 You're now part of an exclusive group of developers waiting for the most advanced competitive programming platform.

What to expect:
• Early access to Code Bets when we launch
• Exclusive perks and lifetime benefits
• First look at our feudal Japanese ranking system (Ashigaru to Shogun)
• Real-time coding duels and AI-powered challenges

🚀 Coming Soon: Q2 2025
We're building something incredible - a platform where coding meets competition in epic 1v1 battles.

Stay tuned for updates! We'll notify you as soon as Code Bets is ready for early access.

Visit us: https://codebets.vercel.app/

Happy coding!
The Code Bets Team`,
  };

  // EmailJS v4 supports passing an options object for the public key
  try {
    console.log("Sending email with template:", {
      serviceId,
      templateId,
      userEmail
    });

    const result = await emailjs.send(serviceId, templateId, templateParams, { publicKey });

    console.log("EmailJS send result:", result);
    
    if (result.status !== 200) {
      throw new Error(`EmailJS returned status ${result.status}: ${result.text}`);
    }
    
    console.log("Email sent successfully!");
    
  } catch (error) {
    console.error("Failed to send email:", error);
    
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error(`Unknown error occurred while sending email: ${String(error)}`);
    }
  }
}
