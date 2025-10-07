import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="w-full min-h-[9rem] bg-white dark:bg-black flex justify-center border-t border-[#393E46] pt-6 pb-5">
            <footer className="w-[900px] flex flex-col justify-between px-6 text-black dark:text-white">
                <div className="w-full flex justify-between">
                    <div>
                        <h4></h4>
                        <nav className="flex flex-col">
                            <Link href={"/"}>Home</Link>
                        </nav>
                    </div>
                    <div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <p>@ {currentYear} Roman Kosmyna</p>
                </div>
            </footer>
        </div>
    )
};

export default Footer;
