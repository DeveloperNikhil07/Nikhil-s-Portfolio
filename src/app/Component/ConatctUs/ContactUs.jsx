"use client";
import React, { useState } from "react";
import Image from "next/image";
import WindowLoader from "../../Component/WindowLoader/WindowLoader";
import ContactInfo from "../../Component/ConatctUs/ContactInfo";
import { SendThankYouMail } from "../../api/WBGlobalDataApi/ContactUsApi/SendThankYouMail";
import styles from "./Contactus.module.css";

// Import Font Awesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    // Handle Input Change + Live Validation
    const handleChange = (e) => {
        const { name, value } = e.target;
        let newValue = name === "phone" ? value.replace(/\D/g, "") : value;

        setFormData((prev) => ({ ...prev, [name]: newValue }));

        // Inline validation
        setErrors((prev) => {
            const newErrors = { ...prev };
            switch (name) {
                case "firstName":
                case "lastName":
                    if (!newValue.trim()) newErrors[name] = "Required";
                    else delete newErrors[name];
                    break;
                case "email":
                    if (!newValue.trim()) newErrors.email = "Required";
                    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newValue))
                        newErrors.email = "Invalid";
                    else delete newErrors.email;
                    break;
                case "phone":
                    if (!newValue.trim()) newErrors.phone = "Required";
                    else if (!/^\d{10}$/.test(newValue))
                        newErrors.phone = "10 digits only";
                    else delete newErrors.phone;
                    break;
                default:
                    break;
            }
            return newErrors;
        });
    };

    // Validate before submit
    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = "Required";
        if (!formData.lastName.trim()) newErrors.lastName = "Required";
        if (!formData.email.trim()) newErrors.email = "Required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            newErrors.email = "Invalid";
        if (!formData.phone.trim()) newErrors.phone = "Required";
        else if (!/^\d{10}$/.test(formData.phone))
            newErrors.phone = "10 digits only";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Submit handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setLoading(true);

        try {
            const res = await SendThankYouMail(formData);
            if (res?.success) {
                alert("Message sent successfully!");
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    message: "",
                });
                setErrors({});
            } else {
                alert("Failed to send message!");
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className={styles.contactSection}>
            {loading && <WindowLoader />}

            <div className="container">
                <div className="text-center mb-5">
                    <h2 className={styles.title}>
                        Get in <span>touch</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Reach out, and let's create a universe of possibilities together!
                    </p>
                </div>

                <div className={`row ${styles.contactBox}`}>
                    {/* Left Side Form */}
                    <div className="col-md-6 mb-4 mb-md-0">
                        <div className={styles.formBox}>
                            <h3>Let’s connect constellations</h3>
                            <p>
                                Let’s align our constellations! Reach out and let the magic of
                                collaboration illuminate our skies.
                            </p>

                            <form onSubmit={handleSubmit}>
                                <div className="row">

                                    <div className="col-md-6 mb-3 position-relative">
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="First Name"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className={`${styles.inputField} ${errors.firstName ? styles.inputError : ""
                                                }`}
                                        />
                                        {errors.firstName && (
                                            <FontAwesomeIcon
                                                icon={faCircleExclamation}
                                                className={styles.errorIcon}
                                            />
                                        )}
                                    </div>
                                    <div className="col-md-6 mb-3 position-relative">
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Last Name"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className={`${styles.inputField} ${errors.lastName ? styles.inputError : ""
                                                }`}
                                        />
                                        {errors.lastName && (
                                            <FontAwesomeIcon
                                                icon={faCircleExclamation}
                                                className={styles.errorIcon}
                                            />
                                        )}
                                    </div>
                                </div>

                                <div className="position-relative mb-3">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`${styles.inputField} ${errors.email ? styles.inputError : ""
                                            }`}
                                    />
                                    {errors.email && (
                                        <FontAwesomeIcon
                                            icon={faCircleExclamation}
                                            className={styles.errorIcon}
                                        />
                                    )}
                                </div>

                                <div className="position-relative mb-3">
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`${styles.inputField} ${errors.phone ? styles.inputError : ""
                                            }`}
                                    />
                                    {errors.phone && (
                                        <FontAwesomeIcon
                                            icon={faCircleExclamation}
                                            className={styles.errorIcon}
                                        />
                                    )}
                                </div>

                                <div className="mb-3 position-relative">
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`${styles.inputField}`}
                                    ></textarea>
                                </div>

                                <button type="submit" className={styles.submitBtn}>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right Side Image */}
                    <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
                        <div className={styles.imageBox}>
                            <Image
                                src="/assets/images/contact-us.jpg"
                                alt="Astronaut"
                                width={400}
                                height={400}
                                className={styles.astronaut}
                            />
                            {/* Add social icons */}
                        </div>
                    </div>
                </div>
            </div>

            {/* <ContactInfo /> */}
        </section>
    );
}
