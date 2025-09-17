import Banner from "@/components/Banner";
import ContactCard from "@/components/ContactCard";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
    <Banner
            title="Contact"
            imageUrl="/images/banner.jpg"
            imageAlt="Banner Image"
          />
    <ContactCard />
    <Footer />
    </>
    
  );
}
