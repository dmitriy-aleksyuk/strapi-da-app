"use server";
import { z } from "zod";
import { subscribeService } from "./services";
import errorMap from "zod/locales/en.js";

const subscribeSchema = z.object({
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
  });

export async function subscribeAction(prevState: any, formData: FormData) {
    //console.log("Our first server action");
    const email = formData.get("signupEmail");
    //console.log(email, "Subscribe email input")
    const validatedFields = subscribeSchema.safeParse({
        email: email,
      });
    
        if (!validatedFields.success) {
        
            console.dir(validatedFields.error.flatten().fieldErrors, { depth: null})
    
        return {
          ...prevState,
          zodErrors: validatedFields.error.flatten().fieldErrors,
          strapiErrors: null,
        };
      }

      const responseData = await subscribeService(validatedFields.data.email);
    //console.log(validatedFields, "Validated fields")
    
    // Server
    if(!responseData) {
        return {
            ...prevState,
            zodErrors: null,
            strapiErrors: null,
            errorMessage: "OPS! Something went wrong",
          };
    }

    // Strapi
    if (responseData.error) {
      return {
        ...prevState,
        zodErrors: null,
        strapiErrors: responseData.error,
        errorMessage: "Failed to subscribe",
      };
    }

    // Success
    return {
        ...prevState,
        zodErrors: null,
        strapiErrors: null,
        errorMessage: null,
        successMessage: "Succesfully Subscribed",
      };

    //console.log(email, "Email input form");
  }