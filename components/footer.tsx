import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Award,
} from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="iWebTechno Logo"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-300 mb-4">
              Digitizing educational institutions with innovative{" "}
              <GradientText variant="blue">SaaS solutions</GradientText>.
            </p>
            <div className="flex space-x-4 mb-4">
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </Link>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <Award size={16} />
              <span className="text-sm">ISO 9001:2015</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Award size={16} />
              <span className="text-sm">ISO/IEC 27001:2013</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              <GradientText variant="orange">Contact Us</GradientText>
            </h3>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Sales</h4>
              <div className="flex items-center mb-1">
                <Mail className="mr-2 h-4 w-4 text-gray-300" />
                <a
                  href="mailto:sales@iwebtechno.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  sales@iwebtechno.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-gray-300" />
                <span className="text-gray-300">1800-889-0695</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Support</h4>
              <div className="flex items-center mb-1">
                <Mail className="mr-2 h-4 w-4 text-gray-300" />
                <a
                  href="mailto:help@iwebtechno.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  help@iwebtechno.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-gray-300" />
                <span className="text-gray-300">1800-889-0695</span>
              </div>
            </div>
          </div>

          {/* Office Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              <GradientText variant="purple">Our Offices</GradientText>
            </h3>

            <div className="mb-4">
              <h4 className="font-semibold text-sm mb-1">Corporate Office:</h4>
              <p className="text-gray-300 text-sm">
                A-501/2/3 Executive Spaces, Rustomjee Central Park Building, Opp
                Kanakia Wall Street, Andheri (East), Chakala Mumbai – 400059.
                INDIA
              </p>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-sm mb-1">
                Support & Branch Office:
              </h4>
              <p className="text-gray-300 text-sm">
                L13/14, Alfran Plaza, M.G.Road, Panaji, Goa – 403001. INDIA.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-1">
                Development Office:
              </h4>
              <p className="text-gray-300 text-sm">
                4th Floor, Kesari Wada, Narayan Peth, N.C.Kelkar Road, Pune –
                411030. INDIA
              </p>
            </div>
          </div>

          {/* Links */}
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 iWebTechno. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
