import { StoryblokServerComponent } from "@storyblok/react/rsc";
import type { FooterItem } from "@/.storyblok/types/287474179047807/storyblok-components";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "../ui/language-switcher";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

const Footer = async ({ blok }: { blok?: FooterItem[] }) => {
  return (
    <footer className="relative bg-[#f1f1f1] text-gray-900 overflow-hidden">
      {/* Watermark logo background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="text-[180px] md:text-[240px] font-bold text-gray-900 whitespace-nowrap select-none">
            PATORO CIGARS
          </div>
        </div>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left Column - Navigation Links */}
          <div>
            <nav>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link
                    href="/products"
                    className="text-gray-900 hover:text-gray-600 transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/history"
                    className="text-gray-900 hover:text-gray-600 transition-colors"
                  >
                    History
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mission"
                    className="text-gray-900 hover:text-gray-600 transition-colors"
                  >
                    Mission and Values
                  </Link>
                </li>
                <li>
                  <Link
                    href="/experience"
                    className="text-gray-900 hover:text-gray-600 transition-colors"
                  >
                    Experience
                  </Link>
                </li>
                <li>
                  <Link
                    href="/press"
                    className="text-gray-900 hover:text-gray-600 transition-colors"
                  >
                    Press
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-900 hover:text-gray-600 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Middle Section - Company Info, Social Media, Email */}
          <div className="flex flex-col ">
            <div className="flex lg:flex-row flex-col gap-6">
              {/* Company Address */}
              <div className="mb-6">
                <p className="text-gray-900">Patoro AG</p>
                <p className="text-gray-900">Hübelistrasse 6,</p>
                <p className="text-gray-900">CH-4600 Olten</p>
              </div>

              {/* Social Media Links */}
              <div className="flex flex-col gap-3 mb-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors"
                >
                  <Facebook size={18} className="text-gray-900" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors"
                >
                  <Instagram size={18} className="text-gray-900" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors"
                >
                  <Linkedin size={18} className="text-gray-900" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Email */}
            <a
              href="mailto:info@patoro.com"
              className="text-2xl font-semibold text-amber-800 hover:text-amber-700 transition-colors"
            >
              info@patoro.com
            </a>

            {/* Logo */}
            <div className="mt-8">
              <Image
                src="/logo.avif"
                alt="Patoro Cigars Logo"
                width={120}
                height={120}
              />
            </div>
          </div>

          {/* Right Section - Language Switcher */}
          <div className="flex justify-end md:justify-start">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Bottom Section - Legal Links and Copyright */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              <Link
                href="/privacy"
                className="text-gray-900 hover:text-gray-600 transition-colors text-sm"
              >
                Privacy
              </Link>
              <Link
                href="/imprint"
                className="text-gray-900 hover:text-gray-600 transition-colors text-sm"
              >
                Imprint
              </Link>
              <Link
                href="/terms"
                className="text-gray-900 hover:text-gray-600 transition-colors text-sm"
              >
                Terms of use
              </Link>
              <Link
                href="/cookies"
                className="text-gray-900 hover:text-gray-600 transition-colors text-sm"
              >
                Cookies
              </Link>
            </div>
            <div className="text-gray-900 text-sm">
              © 2025 Patoro. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Storyblok Components (if provided) */}
      {blok && blok.length > 0 && (
        <div className="hidden">
          {blok.map((item) => (
            <StoryblokServerComponent blok={item} key={item?._uid} />
          ))}
        </div>
      )}
    </footer>
  );
};

export default Footer;
