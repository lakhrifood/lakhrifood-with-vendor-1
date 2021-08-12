import Link from "next/link";

export default function WhyJoinUs() {
    return (
        <div className="why-join container pt-5 text-center mt-3 mb-5">
            <h1 className="text-color  fs-1">Why You Should Join?</h1>
            <p className="pt-2 fs-5">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took agalley of type and scrambled it to make a type specimen book.</p>
            <Link href="/vendor/signup">
                <button className="btn btn-bg mt-2">Sign Us As a HomeChef</button>
            </Link>
            <h1 className="fs-5">Or</h1>
            <Link href="/vendor/signin">
                <button className="btn btn-bg mt-2">Sign In As a HomeChef</button>
            </Link>
        </div>
    )
}