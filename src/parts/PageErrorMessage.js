import {Link} from "react-router-dom";

export default function PageErrorMessage({
    title = "Page Not Found",
    body = "Sorry, but the page you were trying to view does not exist."
                                         }) {
    return (
        <>
            <section>
                <div className="container mx-auto min-h-screen">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-full md:w-4/12 text-center">
                            <img src="/images/content/404 Error Page not Found with people connecting a plug-pana.png" alt="notfound illustration"/>
                            <h2 className="text-3xl font-semibold mb-6">{title}</h2>
                            <p className="text-lg mb-12">
                                {body}
                            </p>
                            <Link to={"/"}
                                  className="text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer">
                                Back to Shop
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}