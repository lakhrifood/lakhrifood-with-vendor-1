const { default: Footer } = require("@/components/vendor/Footer/footer");
const { default: Navbar } = require("@/components/vendor/Navbar");

function index() {
    return (
        <div>
            <Navbar />
            <Footer />
        </div>
    )
}

export default index

