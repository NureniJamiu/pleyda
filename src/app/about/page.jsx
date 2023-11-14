import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

import Subheader from "@/components/Subheader";

import sectionImage from "../../../public/DSC_8238.jpg";
import sectionImage2 from "../../../public/DSC_8235.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="relative text-center px-10 md:px-20 lg:px-64 border-b border-zinc-700 py-8 overflow-hidden">
        <Subheader title="The PLEYDA" subtitle="Story" />

        <div className="md:flex items-center gap-10">
          <div className="md:flex-1 text-left">
            <p>
              In the year 2016, amid the challenges plaguing our community, the
              seeds of Purposeful Leadership for Empowerment & Youth Development
              Association (PLEYDA) were sown. This was a response to the
              prevalent menace that hindered the majority of secondary school
              students from envisioning a future beyond their immediate
              circumstances.
            </p>{" "}
            <br />
            <p>
              Many of our founding members, products of public secondary
              schools, encountered and triumphed over adversities in their
              academic journeys, ultimately ascending to the pinnacle of their
              respective fields. The genesis of PLEYDA lies in the collective
              determination to break free from the confines imposed by the
              community{"'"}s challenges.
            </p>{" "}
            <br />
            <p>
              The heart of the PLEYDA initiative lies in the persistent
              commitment to assisting youths in realizing and maximizing their
              untapped potential. Emerging as beacons of inspiration within
              their communities, our founding members became living proof that
              one{"'"}s origins need not dictate their destination.
            </p>{" "}
            <br />
            <p>
              Since its inception, the organization has served as a catalyst for
              positive change, establishing itself as a transformative force
              within the community. Beyond academic pursuits, PLEYDA{"'"}s
              impact extends to cultivating an environment that nurtures
              character, integrity, and the pursuit of excellence among the
              youth.
            </p>{" "}
            <br />
            <p>
              Our commitment goes beyond mentorship; it is a dedication to
              instilling a sense of morality that goes hand in hand with
              acceptance and integration into society. PLEYDA aspires not only
              to emancipate youths from the shackles of destruction but also to
              constitute a vibrant forum that amplifies their voices and
              aspirations.
            </p>{" "}
            <br />
            <p>
              As the PLEYDA story unfolds, it echoes the resilience of those who
              dared to dream beyond the limitations imposed by circumstances.
            </p>{" "}
            <br />
            <p>
              This is the saga of Purposeful Leadership for Empowerment & Youth
              Development Association—a testament to the transformative power of
              collective vision, resilience, and unwavering commitment to
              shaping a brighter future for generations to come.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
