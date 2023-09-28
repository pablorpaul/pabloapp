
export default function HomeScreen(){

    return (
        <main>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">Free</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">
                                $0
                                <small className="text-body-secondary fw-light">/mo</small>
                            </h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>10 users included</li>
                                <li>2 GB of storage</li>
                                <li>Email support</li>
                                <li>Help center acess</li>
                            </ul>
                            <button></button>

                        </div>
                    </div>
                </div>
                <div className="col"></div>
                <div className="col"></div>
            </div>
        </main>
    )
}