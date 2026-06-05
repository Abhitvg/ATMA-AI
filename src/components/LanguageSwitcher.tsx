"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value as "en" | "hi";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className="relative">
      <select
        value={locale}
        onChange={handleLanguageChange}
        className="appearance-none bg-foreground/5 hover:bg-foreground/10 text-foreground text-sm rounded-lg px-3 py-2 pr-8 outline-none border border-transparent focus:border-accent transition-colors"
        aria-label="Select Language"
      >
        <option value="en" className="text-primary-dark">English</option>
        <option value="hi" className="text-primary-dark">हिन्दी (Hindi)</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-foreground/70">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}
