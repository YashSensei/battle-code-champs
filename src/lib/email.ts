import emailjs from "@emailjs/browser";

export type WaitlistTemplateParams = {
  to_email?: string;
  email?: string;
  admin_email?: string;
  reply_to?: string;
};

export async function sendWaitlistAcknowledgement(
  userEmail: string
): Promise<void> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as
    | string
    | undefined;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as
    | string
    | undefined;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as
    | string
    | undefined;

  if (!serviceId || !templateId || !publicKey) {
    console.warn(
      "EmailJS environment variables are not set. Skipping email send."
    );
    return;
  }
  const templateParams: WaitlistTemplateParams = {
    to_email: userEmail,
    email: userEmail,
    admin_email: "arhan.24bcs10023@sst.scaler.com",
    reply_to: userEmail,
  };

  // EmailJS v4 supports passing an options object for the public key
  await emailjs.send(serviceId, templateId, templateParams, { publicKey });
}
