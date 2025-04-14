"use client";
import type { SubscribeProps } from "@/types";
import { useActionState } from "react";
import { subscribeAction } from "@/data/actions";

const INITIAL_STATE = {
    zodErrors: null,
    strapiErrors: null,
    errorMessage: null,
    successMessage: null,
  };

export function Subscribe({
    subscribeTitle,
    subscribeText,
    subscribePlaceholder,
    subscribeButton,
}: Readonly<SubscribeProps>) {

    const [formState, formAction] = useActionState(
        subscribeAction,
        INITIAL_STATE
      );

    //console.log(formState, "this is our form state coming from useActionState");
    const zodErrors = formState?.zodErrors?.email;
    const strapiErrors = formState?.strapiErrors?.message;
    const errorMessage = strapiErrors || zodErrors || formState?.errorMessage;
    const successMessage = formState?.successMessage;

    return (
        <section className="newsletter container">
            <div className="newsletter__info">
                <h4>{subscribeTitle}</h4>
                <p className="copy">{subscribeText}</p>
            </div>
            <form className="newsletter__form" action={formAction}>
                <input
                    name="signupEmail"
                    type="email"
                    placeholder={errorMessage|| successMessage || subscribePlaceholder }
                    className={`newsletter__email ${zodErrors ? "newsletter__email--error" : ""}`}/>
                <button
                    type="submit"
                    className="newsletter__subscribe btn btn--green btn--medium">
                    {subscribeButton}
                </button>
            </form>
        </section>
    );
}