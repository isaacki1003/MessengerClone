'use client';

import Input from "@/app/components/Input";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, set, useForm } from "react-hook-form";

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN');
        }
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });

    const onSubmit : SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if (variant === 'REGISTER') {
            // Axios Register
        }

        if (variant === 'LOGIN') {
            // NextAuth SignIn
        }
    };

    const socialAction = (action: string) => {
        setIsLoading(true);

        // NextAuth Social SignIn
    }

    return (
        <div className="
            mt-8
            sm:mx-auto
            sm:w-full
            sm:max-w-md
        ">
            <div className="
                bg-white
                py-8
                px-4
                shadow
                sm:rounded-lg
                sm:px-10
            ">
                <form
                className="space-y-6"
                onSubmit={handleSubmit(onSubmit)}
                >
                    <Input />
                </form>
            </div>
        </div>
     );
}

export default AuthForm;
