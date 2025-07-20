"use client";

import { Card, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import {
  TrophyIcon,
  TargetIcon,
  LinkedinLogoIcon,
  TwitterLogoIcon,
} from "@phosphor-icons/react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://iwebtechno.com/wp-content/uploads/2019/10/Sidbi-smile-high-res.jpg')`,
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <GradientText>About Us</GradientText>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Empowering education through innovative technology solutions since
              2005
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <GradientText>Our Journey</GradientText>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Transforming education through technology innovation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card variant="gradient" effect="glass" className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 bg-gradient-to-r rounded-lg flex items-center justify-center from-[#0470b6] to-[#0891b2] dark:from-[#fbbf24] dark:to-[#f59e0b] w-12 h-12">
                    <TargetIcon className="text-white dark:text-black" />
                  </div>
                  <h3 className="text-xl font-semibold ml-4">Our Mission</h3>
                </div>
                <CardDescription className="text-base">
                  To digitize and streamline educational institutions through
                  our comprehensive IUMS platform, serving 100 million students
                  across educational, financial, and recreational services.
                </CardDescription>
              </Card>

              <Card variant="gradient" effect="glass" className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 bg-gradient-to-r rounded-lg flex items-center justify-center from-[#0470b6] to-[#0891b2] dark:from-[#fbbf24] dark:to-[#f59e0b] w-12 h-12">
                    <TrophyIcon className="text-white dark:text-black" />
                  </div>
                  <h3 className="text-xl font-semibold ml-4">
                    Our Achievements
                  </h3>
                </div>
                <CardDescription className="text-base">
                  Successfully digitized 10+ Universities with 500,000+
                  students. Our goal is to reach 25-50% of 35 million Higher
                  Education Students through our innovative FREEMIUM Model.
                </CardDescription>
              </Card>
            </div>

            <Card variant="gradient" effect="glass" className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                <GradientText>Company Overview</GradientText>
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  iWeb started its journey in the year 2005 with its home grown
                  ERP iWeb Enterprise Suite®. Sensing opportunities in the
                  Education Segment, we created IUMS where we currently digitize
                  Academic (Admission, Exams, Fees, Attendance Modules) as well
                  as non-academic (HRMS, Payroll, Purchase, Inventory, Finance
                  Modules) for Universities, Colleges, & Schools across India.
                </p>
                <p>
                  Our long term vision is to have 100 million students on our
                  platform enjoying various services across the educational,
                  financial, recreational and other allied platforms.
                </p>
                <p>
                  We plan to achieve this goal with our FREEMIUM Model offering
                  which is 1st of its kind, built for global adoption on our
                  proprietary Less-Code AI technology Agilewiz.AI BPMS® which is
                  an IPR of iWeb along with Integrated University Management
                  System, IUMS®, iWeb Enterprise Suite® & Empowering Agility®.
                </p>
                <p>
                  iWeb has been assessed and found to confirm with the
                  requirements of ISO 9001:2015 as well as ISO/IEC 27001:2013
                  for 'Software Design & Product Development'. iWeb is also
                  registered under the NSIC and Udyog Aadhaar Schemes of the
                  Government of India and is recognized under the MAKE IN INDIA
                  Program of the Government of India.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 pb-32 lg:pb-40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <GradientText>Our Leadership Team</GradientText>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Meet the visionaries behind iWeb's success
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* Akshay Shah */}
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg animate-pulse"></div>
                <div className="flex justify-center space-x-4 mt-4">
                  <Button
                    variant="none"
                    effect="glass"
                    size="icon"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/akshay-shah-a8a4015/",
                        "_blank"
                      )
                    }
                  >
                    <LinkedinLogoIcon className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="none"
                    effect="glass"
                    size="icon"
                    onClick={() =>
                      window.open("http://twitter.com/AkshayiWeb", "_blank")
                    }
                  >
                    <TwitterLogoIcon className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="md:col-span-2">
                <Card variant="gradient" effect="glass" className="p-8">
                  <h3 className="text-2xl font-bold mb-2">
                    <GradientText>Akshay Shah</GradientText>
                  </h3>
                  <p className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-4">
                    FOUNDER, CEO
                  </p>
                  <div className="space-y-3 text-gray-700 dark:text-gray-300">
                    <p>
                      • Akshay has 20 years of experience as a technology &
                      business enthusiast
                    </p>
                    <p>
                      • He is a Nasscom Mumbai Regional Council Nominated Member
                      for 2019-20 spearheading SMBs & Software Products
                    </p>
                    <p>
                      • Akshay has also been selected By GOI as an Atal
                      Innovation Mission – AIM Mentor
                    </p>
                    <p>
                      • Akshay has been nominated as an MVP by Alibaba Cloud
                      India for the Year 2019-2020
                    </p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Ketan Trivedi */}
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg animate-pulse"></div>
                <div className="flex justify-center space-x-4 mt-4">
                  <Button
                    variant="none"
                    effect="glass"
                    size="icon"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/ketan-trivedi-87a8755/",
                        "_blank"
                      )
                    }
                  >
                    <LinkedinLogoIcon className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="md:col-span-2">
                <Card variant="gradient" effect="glass" className="p-8">
                  <h3 className="text-2xl font-bold mb-2">
                    <GradientText>Ketan Trivedi (B.Com, CA)</GradientText>
                  </h3>
                  <p className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-4">
                    Founder, Mentor
                  </p>
                  <div className="space-y-3 text-gray-700 dark:text-gray-300">
                    <p>
                      • A seasoned Chartered Accountant and entrepreneur by
                      profession
                    </p>
                    <p>
                      • He has over 40 years experience encompassing extensive
                      exposure in accounts, finance and administration across
                      multiple industries
                    </p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Varsha Shah */}
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg animate-pulse"></div>
                <div className="flex justify-center space-x-4 mt-4">
                  <Button
                    variant="none"
                    effect="glass"
                    size="icon"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/varsha-shah-3842b06/",
                        "_blank"
                      )
                    }
                  >
                    <LinkedinLogoIcon className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="md:col-span-2">
                <Card variant="gradient" effect="glass" className="p-8">
                  <h3 className="text-2xl font-bold mb-2">
                    <GradientText>Varsha Shah (B.E. [IT])</GradientText>
                  </h3>
                  <p className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-4">
                    Director – Sales & Marketing
                  </p>
                  <div className="space-y-3 text-gray-700 dark:text-gray-300">
                    <p>
                      • Varsha has over 18 years of experience in Marketing and
                      Sales in IT / ITES companies like Bajaj International Pvt
                      Ltd
                    </p>
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
