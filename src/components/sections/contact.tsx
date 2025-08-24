"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { useInViewAnimation } from "@/hooks/use-in-view-animation";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const [formValues, setFormValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormValues, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const { ref, controls, isInView } = useInViewAnimation({
    threshold: 0.2,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof ContactFormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validate form
      contactFormSchema.parse(formValues);

      // Clear errors
      setErrors({});

      // Submit form
      setIsSubmitting(true);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Show success message
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I will get back to you soon.",
      });

      // Reset form
      setFormValues({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Set form errors
        const newErrors: Partial<Record<keyof ContactFormValues, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof ContactFormValues] = err.message;
          }
        });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mohith321p@gmail.com",
      href: "mailto:mohith321p@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8519904179",
      href: "tel:+918519904179",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bhimavaram, India",
      href: "https://maps.google.com/?q=Bhimavaram",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="glass p-6 md:p-8 rounded-lg"
        >
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            className="text-xl md:text-2xl font-bold mb-4 md:mb-6"
          >
            Send a Message
          </motion.h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={controls}>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formValues.name}
                onChange={handleChange}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <p className="text-sm text-destructive mt-1">{errors.name}</p>
              )}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 50 }} animate={controls}>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formValues.email}
                onChange={handleChange}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-sm text-destructive mt-1">{errors.email}</p>
              )}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 50 }} animate={controls}>
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formValues.subject}
                onChange={handleChange}
                className={errors.subject ? "border-destructive" : ""}
              />
              {errors.subject && (
                <p className="text-sm text-destructive mt-1">
                  {errors.subject}
                </p>
              )}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 50 }} animate={controls}>
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formValues.message}
                onChange={handleChange}
                className={errors.message ? "border-destructive" : ""}
              />
              {errors.message && (
                <p className="text-sm text-destructive mt-1">
                  {errors.message}
                </p>
              )}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 50 }} animate={controls}>
              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </motion.div>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass p-8 rounded-lg space-y-6"
        >
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            className="text-2xl font-bold mb-6"
          >
            Contact Information
          </motion.h3>

          <div className="space-y-6 md:space-y-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.title}
                  href={info.href}
                  target={info.title === "Location" ? "_blank" : undefined}
                  rel={
                    info.title === "Location"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, y: 50 }}
                  animate={controls}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  custom={index}
                  className="flex items-start p-4 glass rounded-lg hover:bg-primary/5 transition-colors"
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-base md:text-lg font-semibold">
                      {info.title}
                    </p>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            className="mt-12"
          >
            <h4 className="text-xl font-bold mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/mohith789p"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 text-foreground hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/potnuru-mohith"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 text-foreground hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/mohith321p"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 text-foreground hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
