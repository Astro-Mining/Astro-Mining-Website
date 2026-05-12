import clsx from "clsx";
import Icon from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";
import styles from "@/components/sections/ContactSection.module.css";

export default function ContactSection({ contact }) {
  return (
    <section className={styles.section} id="contact">
      <div className={clsx("container", styles.grid)}>
        <Reveal className={styles.infoCard}>
          <span className="eyebrow">Contact Us</span>
          <h2 className="section-title">Let’s discuss your material requirements</h2>
          <p className={styles.copy}>
            We are here to provide more information, answer questions, and support sourcing for your next project.
          </p>
          <div className={styles.infoList}>
            <p><Icon name="mapPin" size={18} /> {contact.address}</p>
            <p><Icon name="phone" size={18} /> {contact.phones.join(" / ")}</p>
            <p><Icon name="mail" size={18} /> {contact.email}</p>
          </div>
        </Reveal>
        <Reveal className={styles.formCard}>
          <form className={styles.form}>
            <div className={styles.twoCol}>
              <label>
                <span>First Name</span>
                <input name="firstName" placeholder="First Name" type="text" />
              </label>
              <label>
                <span>Last Name</span>
                <input name="lastName" placeholder="Last Name" type="text" />
              </label>
            </div>
            <div className={styles.twoCol}>
              <label>
                <span>Email</span>
                <input name="email" placeholder="Email Address" type="email" />
              </label>
              <label>
                <span>Phone Number</span>
                <input name="phone" placeholder="Phone Number" type="tel" />
              </label>
            </div>
            <label>
              <span>Project Details</span>
              <textarea name="message" placeholder="Tell us about the product, quantity, and target industry." rows="5" />
            </label>
            <button type="submit">Send Inquiry</button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
