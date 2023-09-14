import Link from "next/link";

export default function StudentInfo(){
    return(
        <div>
            <h1>Name: Haewon(Harry) Lee</h1>
            <p>Course section: CPRG-306-F</p>
            <Link href="https://github.com/HarryLee87">
            https://github.com/HarryLee87
            </Link>  
        </div>
    );
}