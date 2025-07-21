"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardDescription } from "@/components/ui/card";
import { GradientText } from "@/components/ui/gradient-text";
import {
  TrophyIcon,
  TargetIcon,
  LinkedinLogoIcon,
  TwitterLogoIcon,
  SparkleIcon,
} from "@phosphor-icons/react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);
  const journeyTitleRef = useRef<HTMLHeadingElement>(null);
  const journeyCardsRef = useRef<HTMLDivElement>(null);
  const teamTitleRef = useRef<HTMLHeadingElement>(null);
  const teamMembersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create floating background elements for hero
    const createFloatingElements = () => {
      const container = floatingElementsRef.current;
      if (!container) return;

      container.innerHTML = "";

      // Create subtle floating shapes
      for (let i = 0; i < 8; i++) {
        const element = document.createElement("div");
        element.className =
          "absolute w-1 h-1 bg-gradient-to-r from-[#0470b6]/30 to-[#0891b2]/30 dark:from-[#fbbf24]/30 dark:to-[#f59e0b]/30 rounded-full opacity-60";
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;
        container.appendChild(element);

        // Gentle floating animation
        gsap.to(element, {
          y: -50,
          x: Math.random() * 100 - 50,
          duration: 6 + Math.random() * 4,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: Math.random() * 2,
        });
      }
    };

    createFloatingElements();

    // Hero section - Enhanced brand-focused entrance
    const heroTl = gsap.timeline();

    // Initial state
    gsap.set([titleRef.current, subtitleRef.current], {
      y: 50,
      opacity: 0,
    });

    gsap.set(floatingElementsRef.current, {
      opacity: 0,
    });

    heroTl
      .to(floatingElementsRef.current, {
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      })
      .fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        "-=1"
      )
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8"
      );

    // Team section animations
    gsap.fromTo(
      teamTitleRef.current,
      { y: 40, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: teamTitleRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Team members animation
    const teamMembers = teamMembersRef.current?.children;
    if (teamMembers) {
      gsap.fromTo(
        teamMembers,
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: teamMembersRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[85vh] bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://iwebtechno.com/wp-content/uploads/2019/10/Sidbi-smile-high-res.jpg')`,
          backgroundPosition: "center 30%", // Adjusted to show more upper body/faces
        }}
      >
        {/* Floating background elements */}
        <div
          ref={floatingElementsRef}
          className="absolute inset-0 pointer-events-none"
        />

        {/* Enhanced overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/40 to-black/50"></div>

        {/* Subtle background shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-[#0470b6]/20 to-[#0891b2]/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-[#fbbf24]/20 to-[#f59e0b]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-[#0470b6]/30 to-[#0891b2]/30 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>

        {/* Content */}
        <div
          ref={heroContentRef}
          className="relative z-10 container mx-auto px-4 text-center"
        >
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight font-heading-exo2"
          >
            <Card variant="gradient" effect="fade">
              <GradientText>About Us</GradientText>
            </Card>
          </h1>
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl lg:text-3xl text-gray-100 max-w-4xl mx-auto leading-relaxed font-light font-body-quicksand"
          >
            Empowering education through innovative technology solutions since
            2005
          </p>
        </div>
      </section>

      {/* Enhanced Company Overview Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                ref={journeyTitleRef}
                className="text-4xl md:text-5xl font-bold mb-6 font-heading-exo2"
              >
                <GradientText>Our Journey</GradientText>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                <span className="font-body-quicksand">
                  Transforming education through technology innovation with
                  cutting-edge solutions
                </span>
              </p>
            </div>

            <div ref={journeyCardsRef} className="space-y-16">
              <Card
                variant="gradient"
                effect="glass"
                className="p-10 border-0 shadow-xl hover:shadow-2xl transition-all duration-500"
                icon={{
                  icon: TargetIcon,
                  title: "Our Mission",
                  gradient: true,
                }}
              >
                <CardDescription className="text-lg leading-relaxed">
                  <span className="font-body-quicksand">
                    To digitize and streamline educational institutions through
                    our comprehensive IUMS platform, serving 100 million
                    students across educational, financial, and recreational
                    services with innovative technology solutions.
                  </span>
                </CardDescription>
              </Card>

              <Card
                variant="gradient"
                effect="glass"
                className="p-10 border-0 shadow-xl hover:shadow-2xl transition-all duration-500"
                icon={{
                  icon: TrophyIcon,
                  title: "Our Achievements",
                  gradient: true,
                }}
              >
                <CardDescription className="text-lg leading-relaxed">
                  <span className="font-body-quicksand">
                    Successfully digitized 10+ Universities with 500,000+
                    students. Our goal is to reach 25-50% of 35 million Higher
                    Education Students through our innovative FREEMIUM Model and
                    proprietary AI technology.
                  </span>
                </CardDescription>
              </Card>

              <Card
                variant="gradient"
                effect="glass"
                className="p-12 border-0 shadow-xl hover:shadow-2xl transition-all duration-500"
                icon={{
                  icon: TargetIcon,
                  title: "Company Overview",
                  gradient: true,
                }}
              >
                <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p className="font-body-quicksand">
                    iWeb started its journey in the year 2005 with its home
                    grown ERP iWeb Enterprise Suite®. Sensing opportunities in
                    the Education Segment, we created IUMS where we currently
                    digitize Academic (Admission, Exams, Fees, Attendance
                    Modules) as well as non-academic (HRMS, Payroll, Purchase,
                    Inventory, Finance Modules) for Universities, Colleges, &
                    Schools across India.
                  </p>
                  <p className="font-body-quicksand">
                    Our long term vision is to have 100 million students on our
                    platform enjoying various services across the educational,
                    financial, recreational and other allied platforms.
                  </p>
                  <p className="font-body-quicksand">
                    We plan to achieve this goal with our FREEMIUM Model
                    offering which is 1st of its kind, built for global adoption
                    on our proprietary Less-Code AI technology Agilewiz.AI BPMS®
                    which is an IPR of iWeb along with Integrated University
                    Management System, IUMS®, iWeb Enterprise Suite® &
                    Empowering Agility®.
                  </p>
                  <p className="font-body-quicksand">
                    iWeb has been assessed and found to confirm with the
                    requirements of ISO 9001:2015 as well as ISO/IEC 27001:2013
                    for 'Software Design & Product Development'. iWeb is also
                    registered under the NSIC and Udyog Aadhaar Schemes of the
                    Government of India and is recognized under the MAKE IN
                    INDIA Program of the Government of India.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="py-20 pb-32 lg:pb-40 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              ref={teamTitleRef}
              className="text-4xl md:text-5xl font-bold mb-6 font-heading-exo2"
            >
              <GradientText>Our Leadership Team</GradientText>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              <span className="font-body-quicksand">
                Meet the visionaries behind iWeb's success and innovation
              </span>
            </p>
          </div>

          <div ref={teamMembersRef} className="max-w-7xl mx-auto space-y-20">
            {/* Akshay Shah */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Image with social icons overlayed bottom left */}
              <div className="relative flex items-center justify-center w-full">
                <div className="w-64 h-64 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-3xl shadow-2xl overflow-hidden">
                  <img
                    src="https://iwebtechno.com/wp-content/uploads/2019/11/team-akshay-v01.jpg"
                    alt="Akshay Shah - Founder, CEO"
                    className="w-full h-full object-cover"
                  />
                  {/* Social icons overlayed bottom right */}
                  <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                    <div
                      className="w-10 h-10 bg-gradient-to-r from-[#0470b6] to-[#0891b2] dark:from-[#fbbf24] dark:to-[#f59e0b] rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
                      title="LinkedIn"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/akshay-shah-a8a4015/",
                          "_blank"
                        )
                      }
                    >
                      <LinkedinLogoIcon className="h-5 w-5 text-white dark:text-black" />
                    </div>
                    <div
                      className="w-10 h-10 bg-gradient-to-r from-[#0470b6] to-[#0891b2] dark:from-[#fbbf24] dark:to-[#f59e0b] rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
                      title="Twitter"
                      onClick={() =>
                        window.open("http://twitter.com/AkshayiWeb", "_blank")
                      }
                    >
                      <TwitterLogoIcon className="h-5 w-5 text-white dark:text-black" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center h-full">
                <Card
                  variant="gradient"
                  effect="glass"
                  className="p-12 border-0 shadow-2xl relative overflow-hidden w-full"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-[#0470b6]/10 to-[#0891b2]/10 dark:from-[#fbbf24]/10 dark:to-[#f59e0b]/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <h3 className="text-4xl font-bold mb-4">
                      <GradientText>
                        <span className="font-heading-exo2">Akshay Shah</span>
                      </GradientText>
                    </h3>
                    <p className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-8">
                      <span className="font-body-quicksand">FOUNDER, CEO</span>
                    </p>
                    <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                      <p className="flex items-start font-body-quicksand">
                        <SparkleIcon className="text-[#0470b6] dark:text-[#fbbf24] mt-1 mr-4 flex-shrink-0" />
                        Akshay has 20 years of experience as a technology &
                        business enthusiast
                      </p>
                      <p className="flex items-start font-body-quicksand">
                        <SparkleIcon className="text-[#0470b6] dark:text-[#fbbf24] mt-1 mr-4 flex-shrink-0" />
                        He is a Nasscom Mumbai Regional Council Nominated Member
                        for 2019-20 spearheading SMBs & Software Products
                      </p>
                      <p className="flex items-start font-body-quicksand">
                        <SparkleIcon className="text-[#0470b6] dark:text-[#fbbf24] mt-1 mr-4 flex-shrink-0" />
                        Akshay has also been selected By GOI as an Atal
                        Innovation Mission – AIM Mentor
                      </p>
                      <p className="flex items-start font-body-quicksand">
                        <SparkleIcon className="text-[#0470b6] dark:text-[#fbbf24] mt-1 mr-4 flex-shrink-0" />
                        Akshay has been nominated as an MVP by Alibaba Cloud
                        India for the Year 2019-2020
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Ketan Trivedi */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative flex items-center justify-center w-full">
                <div className="w-64 h-64 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-3xl shadow-2xl overflow-hidden">
                  <img
                    src="https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/512885685_10223540173492028_6248824895965791880_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=3mGHxnNYBPwQ7kNvwG09GUy&_nc_oc=AdnsFo2y3QwSJkvo3YD3dnKIsWXG7ZJr_uBt5C98svNZVHru6RunLuVvjyqZCXY2kG9XfpM3X7WHd7XYGnY9cwGQ&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=_d6rMgq9lSLyAKfqXkjO8A&oh=00_AfR1pZo4ILD9LdseCRJsHG4y1CbyQlw9acjKTWh48MvtDw&oe=68835A8F"
                    alt="Ketan Trivedi - Founder, Mentor"
                    className="w-full h-full object-cover"
                  />
                  {/* Social icon overlayed bottom right */}
                  <div className="absolute bottom-4 right-4">
                    <div
                      className="w-10 h-10 bg-gradient-to-r from-[#0470b6] to-[#0891b2] dark:from-[#fbbf24] dark:to-[#f59e0b] rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
                      title="LinkedIn"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/ketan-trivedi-87a8755/",
                          "_blank"
                        )
                      }
                    >
                      <LinkedinLogoIcon className="h-5 w-5 text-white dark:text-black" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center h-full">
                <Card
                  variant="gradient"
                  effect="glass"
                  className="p-12 border-0 shadow-2xl relative overflow-hidden w-full"
                >
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-r from-[#0470b6]/10 to-[#0891b2]/10 dark:from-[#fbbf24]/10 dark:to-[#f59e0b]/10 rounded-full -translate-y-16 -translate-x-16"></div>
                  <div className="relative z-10">
                    <h3 className="text-4xl font-bold mb-4">
                      <GradientText>
                        <span className="font-heading-exo2">
                          Ketan Trivedi (B.Com, CA)
                        </span>
                      </GradientText>
                    </h3>
                    <p className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-8">
                      <span className="font-body-quicksand">
                        Founder, Mentor
                      </span>
                    </p>
                    <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                      <p className="flex items-start font-body-quicksand">
                        <SparkleIcon className="text-[#0470b6] dark:text-[#fbbf24] mt-1 mr-4 flex-shrink-0" />
                        A seasoned Chartered Accountant and entrepreneur by
                        profession
                      </p>
                      <p className="flex items-start font-body-quicksand">
                        <SparkleIcon className="text-[#0470b6] dark:text-[#fbbf24] mt-1 mr-4 flex-shrink-0" />
                        He has over 40 years experience encompassing extensive
                        exposure in accounts, finance and administration across
                        multiple industries
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Varsha Shah */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative flex items-center justify-center w-full">
                <div className="w-64 h-64 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-3xl shadow-2xl overflow-hidden">
                  <img
                    src="https://iwebtechno.com/wp-content/uploads/2019/11/team-varsha.jpg"
                    alt="Varsha Shah - Director, Sales & Marketing"
                    className="w-full h-full object-cover"
                  />
                  {/* Social icon overlayed bottom right */}
                  <div className="absolute bottom-4 right-4">
                    <div
                      className="w-10 h-10 bg-gradient-to-r from-[#0470b6] to-[#0891b2] dark:from-[#fbbf24] dark:to-[#f59e0b] rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
                      title="LinkedIn"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/varsha-shah-3842b06/",
                          "_blank"
                        )
                      }
                    >
                      <LinkedinLogoIcon className="h-5 w-5 text-white dark:text-black" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center h-full">
                <Card
                  variant="gradient"
                  effect="glass"
                  className="p-12 border-0 shadow-2xl relative overflow-hidden w-full"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-[#0470b6]/10 to-[#0891b2]/10 dark:from-[#fbbf24]/10 dark:to-[#f59e0b]/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <h3 className="text-4xl font-bold mb-4">
                      <GradientText>
                        <span className="font-heading-exo2">
                          Varsha Shah (B.E. [IT])
                        </span>
                      </GradientText>
                    </h3>
                    <p className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-8">
                      <span className="font-body-quicksand">
                        Director – Sales & Marketing
                      </span>
                    </p>
                    <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                      <p className="flex items-start font-body-quicksand">
                        <SparkleIcon className="text-[#0470b6] dark:text-[#fbbf24] mt-1 mr-4 flex-shrink-0" />
                        Varsha has over 18 years of experience in Marketing and
                        Sales in IT / ITES companies like Bajaj International
                        Pvt Ltd
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
