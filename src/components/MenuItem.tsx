import Link from "next/link";

export default function TopMenuItem({ title, pageRef }: { title:string; pageRef:string;}){
    return(
        <Link href={pageRef} className="font-medium text-lg font-mono text-stone-400" style={{margin:"auto 0px"}}>
            {title}
        </Link>
    );
}