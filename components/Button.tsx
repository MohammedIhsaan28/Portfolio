import Link from "next/link";

interface ButtonProps {
    className?: string;
    id?: string;
    text: string;
}

export default function Button({className,id,text}: ButtonProps) {

    return(

        <Link href={'#counter'} className={`${className ?? ''} cta-wrapper`}>
            <div className="cta-button group">
                <div className="bg-circle"/>
                    <p className="text font-mono font-semibold ">{text}</p>

                    <div className="arrow-wrapper">
                        <img src={'/images/arrow-down.svg'} alt="arrow"/>
                    </div>

                

            </div>

        </Link>

    )
}