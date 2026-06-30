import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Il nome è obbligatorio").max(100),
  email: z.string().trim().email("Email non valida").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  requestType: z.enum(["consulenza", "gestione"]),
  message: z.string().trim().min(1, "Il messaggio è obbligatorio").max(2000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("contact_messages").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      request_type: data.requestType,
      message: data.message,
    });

    if (error) {
      console.error("Errore salvataggio contatto:", error);
      throw new Error("Impossibile inviare il messaggio. Riprova più tardi.");
    }

    return { ok: true };
  });
