import { useTranslations } from "next-intl";
import NavBar from "@/components/NavBar";

export default function Header() {
    const t = useTranslations('Header');

    return (
        <header>
            <nav className="">
                {/* logo */}
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://chotosoft.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/logo-light.svg" className="block dark:hidden w-20 md:w-20 lg:w-32" alt="logo" />
                        <img src="/logo-dark.svg" className="hidden dark:block w-20 md:w-20 lg:w-32" alt="logo" />
                    </a>
                    {/* nav */}
                    <NavBar options={[t('Home'), t('About'), t('Contact')]} />
                </div>
            </nav>
        </header>
    );
}
