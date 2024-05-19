'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
    message: z
        .string()
        .min(10, {
            message: "Message must be at least 10 characters.",
        })
        .max(160, {
            message: "Message must not be longer than 160 characters.",
        }),
    name: z
        .string()
        .min(3, {
            message: "Name must be at least 3 characters."
        }),
    email: z
        .string()
        .min(3, {
            message: "Email must be at least 3 characters."
        }),

});

export default function ContactUs() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        });
    }

    return (
        <div className="p-10 flex justify-center">
            <div className="grid md:grid-cols-2 gap-10 w-11/12 max-w-screen-xl">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Have a question or feedback? Feel free to reach out to us using the form
                        below. We&apos;ll get back to you as soon as possible.
                    </p>
                </div>
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter Your Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter Your Email" {...field} type="email" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Tell us your requirements and we will get back to you"
                                                className="resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            You can mention your preferred time and date for a meeting
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="w-full flex justify-center md:justify-start">
                                <Button type="submit" className="w-full md:w-auto">Submit</Button>

                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
}
