import { socialImgs } from "@/constants";
import Link from "next/link";

export default function Footer() {
    return(
        <footer className="footer" id="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center md:items-start items-center">
                    <Link href="/">
                        Visit Our Homepage
                    </Link>
                </div>

                <div className="socials">
                    {socialImgs.map((img) => (
                        <Link className="icon"  key={img.name} href={'#footer'}>
                            <img src={img.imgPath} alt={img.name} />
                        </Link>
                    ))}
                </div>

                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        &copy; {new Date().getFullYear()} Ihsaan | Md. All rights reserved.
                    </p>

                </div>

            </div>
            
        </footer>
    )
}