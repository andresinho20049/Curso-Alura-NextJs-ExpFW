import Link from "../src/components/Link"


export default function homePage() {
    return (
        <div>
            <h1>Hello World!</h1>
            <Link href="/faq">
                Ir para o FAQ
            </Link>
        </div>
    )
}