'use client';

import ContactExperience from "@/components/models/Contact/ContactExperience";
import TitleHeader from "@/components/TitleHeader";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";

export default function Contact() {

    const formRef = useRef<HTMLFormElement>(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading,setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setIsLoading(true);
        try{
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
                formRef.current as HTMLFormElement,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
            )
            toast.success('Message sent successfully!');
            setFormData({name:'',email:'', message:''})

        } catch(err){
            console.log('EmailJS Error:',err);
            toast.error('Failed to send message');
        } finally {
            setIsLoading(false);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    }

    return(
        <section id="contact" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title="Get In Touch with me" sub="Contact Information"/>
                <div className="mt-16 grid-12-cols">
                    <div className="xl:col-span-5">

                        <div className="flex-center card-border rounded-lg p-10">
                            <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-7">
                                <div>
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required/>
                                </div>

                                <div>
                                    <label htmlFor="email">Your Email</label>
                                    <input type="email" id="email" name="email" placeholder="Your email" value={formData.email} onChange={handleChange}  required />
                                </div>

                                <div>
                                    <label htmlFor="message">Your Message</label>
                                    <textarea id="message" name="message" placeholder="Your message" value={formData.message} onChange={handleChange} rows={5} required></textarea>
                                </div>

                                <button type="submit" disabled={loading}>
                                    <div className="cta-button group">
                                        <div className="bg-circle"></div>
                                        <p className="text">
                                            {loading ? 'Sending...' : 'Send Message'}
                                        </p>

                                        <div className="arrow-wrapper">
                                            <img src={'/images/arrow-down.svg'} alt="arrow"/>
                                        </div>

                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="xl:col-span-7 min-h-96">
                        <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
                            <ContactExperience/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}